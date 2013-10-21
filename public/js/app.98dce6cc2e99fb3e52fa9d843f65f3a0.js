$(function(){
  var LunchSuggestion = Backbone.Model.extend({
    urlRoot: '/lunch_suggestions',

    defaults: {
      chef: { user: {} },
      menus: [{ menu: null, price: null }],
      orders_before:  11,
      bread_included: true,
      free_shipping:  true
    },
  });

  var LunchSuggestionList = Backbone.Collection.extend({
    url: '/lunch_suggestions',
    model: LunchSuggestion
  });

  var lunchSuggestions = new LunchSuggestionList;

  var LunchSuggestionView = Backbone.View.extend({
    className: "col-md-4 board",

    tmplShow:  _.template($('#show').html()),
    tmplMenu:  _.template($('#menu').html()),
    tmplForm:  _.template($('#form').html()),
    tmplModal: _.template($('#modal').html()),
    tmplAlert: _.template($('#alert').html()),

    events: {
      'submit form':           'onSubmit',
      'click .cancel':         'onCancel',
      'click .edit':           'onEdit',
      'click .confirm-delete': 'onConfirm',
      'click .add-menu':       'onAddMenu',
      'click .del-menu':       'onRemoveMenu',
      'click .spinner':        'onSpin',
    },

    initialize: function() {
      this.initNewOrExistent();
    },

    initNewOrExistent: function() {
      this.$el.removeClass('new-ls');
      
      if (this.model.id) {
        this.$el.attr('id', 'ls-' + this.model.id);
      } else {
        this.$el.addClass('new-ls');
      }
    },

    onSpin: function(e) {
      var $target = $(e.target);
      $target.next('.input-group-addon').html($target.val() > 11 ? 'pm' : 'am');
    },

    ensureOneMenu: function() {
      if (this.$('.row.menu').length == 1) {
        this.$('.row.menu .del-menu').hide();
      } else {
        this.$('.row.menu .del-menu').show();
      }
    },

    onRemoveMenu: function(e) {
      e.preventDefault();
      var self = this, $target = $(e.target);
      $target.closest('.row.menu').fadeOut('slow', function(){ 
        this.remove();
        self.ensureOneMenu();
      });      
    },

    onAddMenu: function() {
      var indices = this.$('[data-index]').map(function(){
        return parseInt($(this).attr('data-index'));
      });
      var index = _.isEmpty(indices) ? 0 : _.max(indices) + 1;
      this.$('.row.menu').last().after(this.tmplMenu(_.extend(this.model.defaults, { index: index })));
      this.$('.row.menu textarea').last().focus();
      this.ensureOneMenu();
    },

    onCancel: function(e) {
      this.model.isNew() ? this.$el.hide('slow', _.bind(this.remove, this)) : this.render();
    },

    onEdit: function(e) {
      e.preventDefault();
      this.render({ onEdit: true });
    },

    onConfirm: function(e) {
      this.model.destroy();
      this.$el.fadeOut('slow', this.afterDelete); 
    },

    afterDelete: function() {
      this.remove();
      if (lunchSuggestions.length == 0)
        $('.new-suggestion').trigger('click');
    },

    onSubmit: function(e) {
      e.preventDefault();
      this.$('button[type=submit]').button('loading');
      var attrs = form2js(e.target);

      this.model.on('error', this.onError, this);
      this.model.on('invalid', this.onInvalid, this);
      this.model.on('sync',  this.onSync, this);
      this.model.save(attrs);
    },

    onSync: function() {
      this.$('button[type=submit]').button('reset');
      
      var lsIds = $.cookie('lsIds');
      lsIds = lsIds ? JSON.parse(lsIds).concat(this.model.id) : [this.model.id];
      $.cookie('lsIds', JSON.stringify(lsIds));
      
      this.initNewOrExistent();
      this.render();
    },

    isOwner: function() {
      var lsIds = $.cookie('lsIds');
      return _.contains((lsIds ? JSON.parse(lsIds) : []), this.model.get('id')); 
    },

    onError: function(model, response) {
      this.$('button[type=submit]').button('reset');
      console.log(response);
      return false;
    },

    template: function(onEdit) {
      var json = this.model.toJSON();

      _.extend(json, { 
        isOwner: this.isOwner(), 
        isNew: this.model.isNew(), 
        index: 0,

      });
      return (this.model.isNew() || onEdit) ? this.tmplForm(json) : this.tmplShow(json);
    },

    handleCheckboxes: function() {
      this.$('[name*=bread_included]').attr('checked', this.model.get('bread_included'));
      this.$('[name*=free_shipping]').attr('checked', this.model.get('free_shipping'));
    },

    initModal: function() {
      var modalId = 'modal-' + this.model.id,
          modalSelector = '#' + modalId;
      
      if (this.model.isNew() || this.$(modalSelector).length > 0) return;
      
      this.$('.delete').attr('data-target', modalSelector);

      var alert = this.tmplAlert({ 
                    alertHeader: "The chef « <strong>" + this.model.get('chef').name + 
                                 "</strong> » will be permanently erased", 
                    alertMessage: "Are you sure to continue ?" 
                  }),
          $modal = $(this.tmplModal({ body: alert }));
      
      $modal.attr('id', modalId);
      this.$el.append($modal);
    },

    render: function(opts) {
      opts || (opts = {});
      
      this.$el.slideUp('slow', _.bind(function(){
        this.$el.html(this.template(opts.onEdit)).slideDown('slow');
        this.handleCheckboxes();
        this.initModal();
        this.ensureOneMenu();
      }, this));
      
      return this;
    }
  });

  var Subheader = Backbone.View.extend({
    el: $("#subheader"),

    events: {
      'click .new-suggestion': 'onNew'
    },

    onNew: function() {
      if ($('.new-ls').length == 0) {
        var view  = new LunchSuggestionView({ model: new LunchSuggestion });
        $('#main-container').prepend(view.render().$el.hide());
        view.$el.show('slow', function(){ view.$('[name="chef.name"]').focus() });
      }
    },

  });

  var App = Backbone.View.extend({
    el: $("#main-container"),
    
    tmplModal: _.template($('#modal').html()),
    tmplLoader: '<div class="loading">' +
                  '<img src="/images/ajax-loader.gif"/> Loading Lunch Board ...' +
                '</div>',
    
    initialize: function() {
      new Subheader();
      this.setTimer();
      // this.loading();

      this.listenTo(lunchSuggestions, 'add', this.addOne);

      var self = this;
      lunchSuggestions.fetch().done(function(){
        if (lunchSuggestions.length == 0)
          $('.new-suggestion').trigger('click');
          // lunchSuggestions.add(new LunchSuggestion, { at: 0 });  
        // self.loadingDismiss();
      });
    },

    loadingDismiss: function() {
      this.$('#loading-modal').modal('hide').remove();
    },

    loading: function() {
      var $modal = $(this.tmplModal({ body: this.tmplLoader }));
      $modal.attr('id', 'loading-modal');
      this.$el.html($modal);
      $modal.modal();
    },

    setTimer: function() {
      setInterval(function(){
        var arrCurrTime = new Date().toLocaleTimeString().split(":");
        arrCurrTime[2] = _.last(arrCurrTime).replace(/\d+/,'');
        $("#timer").html([arrCurrTime[0], arrCurrTime[1]].join(":") + " " + arrCurrTime[2]);
      }, 1000);
    },

    addOne: function(suggestion) {
      var view = new LunchSuggestionView({ model: suggestion });
      this.$el.append(view.render().el);
      view.$('[name="chef.name"]').focus();
    },

  });

  var app = new App;

});
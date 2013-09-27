$(function(){
  var LunchSuggestion = Backbone.Model.extend({
    urlRoot: '/lunch_suggestions',

    defaults: {
      chef: { user: {} },
      menus: [{ menu: null, price: null }],
      orders_before: undefined,
      bread_included: true,
      free_shipping: true
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
      'click #add-menu':       'onAddMenu',
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

    onAddMenu: function() {
      var index = this.$('.row.menu').length;
      this.$('.row.menu:first-child').after(this.tmplMenu(_.extend(this.model.defaults, { index: index })));
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
        lunchSuggestions.add(new LunchSuggestion, { at: 0 });
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

    onValid: function(a,b,c) {
      alert('valid');
    },

    onInvalid: function(model, errors) {
      this.$('button[type=submit]').button('reset');
      debugger
      var self = this;
      _.each(errors, function(errorMessage, domName){
        // debugger
        self.$('[name="' + domName + '"]').css(errorMessage);

      });
      return false;
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
      _.extend(json, { isOwner: this.isOwner(), isNew: this.model.isNew(), index: 0 });
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
        view.$el.show('slow');
      }
    },

  });

  var App = Backbone.View.extend({
    el: $("#main-container"),

    initialize: function() {
      new Subheader();
      this.setTimer();

      this.listenTo(lunchSuggestions, 'add', this.addOne);

      var self = this;
      lunchSuggestions.fetch().done(function(){
        if (lunchSuggestions.length == 0)
          lunchSuggestions.add(new LunchSuggestion, { at: 0 });  
      });
    },

    setTimer: function() {
      setInterval(function(){
        var arrCurrTime = new Date().toLocaleTimeString().split(":");
        arrCurrTime[2] = _.last(arrCurrTime).replace(/\d+/,'');
        $("#timer").html(arrCurrTime.join(":"));
      }, 1000);
    },

    addOne: function(suggestion) {
      var view = new LunchSuggestionView({ model: suggestion });
      this.$el.append(view.render().el);
    },

  });

  var app = new App;

});
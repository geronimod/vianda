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

    // validate: function(attrs, options) {
    //   debugger
    //   if (attrs.end < attrs.start) {
    //     return "can't end before it starts";
    //   }
    // }
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
      if (this.model.id)
        this.$el.attr('id', 'ls-' + this.model.id);
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
      var attrs = form2js(e.target);

      this.model.on('error', this.onError, this);
      this.model.on('sync',  this.onSync, this);
      this.model.save(attrs);
    },

    onSync: function() {
      var lsIds = $.cookie('lsIds');
      lsIds = lsIds ? JSON.parse(lsIds).concat(this.model.id) : [this.model.id];
      $.cookie('lsIds', JSON.stringify(lsIds));
      this.render();
    },

    isOwner: function() {
      var lsIds = $.cookie('lsIds');
      return _.contains((lsIds ? JSON.parse(lsIds) : []), this.model.get('id')); 
    },

    onError: function(model, response) {
      console.log(response);
      alert("error: " + response);
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

  var App = Backbone.View.extend({
    el: $("#main-container"),

    events: {
      'click .new-suggestion': 'onNew'
    },

    initialize: function() {
      this.setTimer();

      this.listenTo(lunchSuggestions, 'add',   this.addOne);
      this.listenTo(lunchSuggestions, 'reset', this.addAll);
      this.listenTo(lunchSuggestions, 'all',   this.render);

      lunchSuggestions.fetch().done(function(){
        if (lunchSuggestions.length == 0)
          lunchSuggestions.add(new LunchSuggestion, { at: 0 });  
      });
      
    },

    setTimer: function() {
      setInterval(function(){
        $("#timer").html(new Date().toLocaleTimeString());
      }, 1000);
    },

    onNew: function() {
      if (this.$('.new-ls').length == 0) {
        var view  = new LunchSuggestionView({ model: new LunchSuggestion });
        this.$('#add-new').after(view.render().$el.hide());
        this.$('.board').show('slow');
      }
    },

    addOne: function(suggestion) {
      var view = new LunchSuggestionView({ model: suggestion });
      this.$el.append(view.render().el);
    },

    addAll: function() {
      lunchSuggestions.each(this.addOne, this);
    },

  });

  var app = new App;

});
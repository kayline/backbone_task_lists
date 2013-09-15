var AllListsView = Backbone.View.extend({

  template: JST['lists/index'],
  el: "#app",

  initialize: function() {
  	this.listenTo(this.collection, 'reset', this.render)
  },

  render: function() {
  	this.$el.html(this.template());
  	this.collection.each(function(list) {
			var view = new ListView({model: list})
			$('.all-lists').append(view.render().html())
		})
  }

});

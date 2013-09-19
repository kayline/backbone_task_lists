var DetailedListView = Backbone.View.extend({
	template: JST['lists/detailed_show'],
	el: '#app',

	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		this.$el.html(this.template());
		console.log(this.model);
		// return $(this.el).html(this.template({list: this.model}))
	}
})
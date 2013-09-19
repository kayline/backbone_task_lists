var BasicListView = Backbone.View.extend({
	template: JST['lists/basic_show'],

	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		return $(this.el).html(this.template({list: this.model}))
	}
})
var BasicListView = Backbone.View.extend({
	template: JST['lists/basic_show'],

	render: function() {
		return $(this.el).html(this.template({list: this.model}))
	}
})
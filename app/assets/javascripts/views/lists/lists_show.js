var ListView = Backbone.View.extend({
	template: JST['lists/show'],

	render: function() {
		return $(this.el).html(this.template({task: this.model}))
	}
})
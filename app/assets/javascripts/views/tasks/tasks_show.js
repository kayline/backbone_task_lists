var TaskView = Backbone.View.extend({
	template: JST['tasks/show'],

	render: function() {
		return $(this.el).html(this.template({task: this.model}))
	}
})
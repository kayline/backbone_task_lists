var TaskView = Backbone.View.extend({
	template: JST['tasks/show'],

	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		return $(this.el).html(this.template({task: this.model}))
	}
})
var DetailedListView = Backbone.View.extend({
	template: JST['lists/detailed_show'],
	el: '#app',

	initialize: function() {
		this.listenTo(this.model, "change", this.render)
	},

	render: function() {
		this.$el.html(this.template());
		this.model.attributes.tasks.forEach(function(task) {
			newTask = new Task(task)
			taskView = new TaskView({model: newTask})
			$('.tasks').append(taskView.render().html())
		})
	}
})
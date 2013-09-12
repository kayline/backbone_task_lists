var TaskListView = Backbone.View.extend({
  
  	template: JST['tasks/index'],
		el: '#app',
 
  
	initialize: function() {
		this.listenTo(this.collection, "reset", this.render)
	},

	render: function() {
		this.$el.html(this.template())
		this.collection.each(function(task) {
			var view = new TaskView({model: task})
			$('.tasks-list').append(view.render().html())
		})
	}

})


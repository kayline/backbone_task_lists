var TaskRouter = Backbone.Router.extend({
	
	routes: {
		"": 					"index",  //#root to list of all tasks for now
	},

	index: function() {
		all_tasks = new TaskList
		var view = new TaskListView({collection: all_tasks})
		all_tasks.fetch({reset: true})
	},

	show: function() {

	}


});

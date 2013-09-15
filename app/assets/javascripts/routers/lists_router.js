var ListRouter = Backbone.Router.extend({

	routes: {
		"lists": 					"index",
	},

	index: function() {
		console.log("lists index route triggered")
		all_lists = new AllLists
		var view = new AllListsView({collection: all_lists})
		all_lists.fetch({reset:true})
	},

	show: function() {

	}


});

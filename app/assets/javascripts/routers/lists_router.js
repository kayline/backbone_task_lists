var ListRouter = Backbone.Router.extend({

	routes: {
		"lists": 					"index",
		"lists/:id": 			"show",
	},

	index: function() {
		all_lists = new AllLists
		var view = new AllListsView({collection: all_lists})
		all_lists.fetch({reset:true})
	},

	show: function(params) {
		console.log(params);
		list = new List({ id: params });
		listView = new DetailedListView({model: list})
		list.fetch();
	}


});

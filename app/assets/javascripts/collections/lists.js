var AllLists = Backbone.Collection.extend({
  model: List,
  url: '/lists'
});

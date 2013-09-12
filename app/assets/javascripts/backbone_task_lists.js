window.BackboneTaskLists = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TaskRouter;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BackboneTaskLists.initialize();
});

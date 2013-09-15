window.BackboneTaskLists = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TaskRouter;
    new ListRouter;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BackboneTaskLists.initialize();
});

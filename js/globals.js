// this is to load anything you might want in the global namespace for the application environment.
require(['base_view'], function(BaseView) {
  // Base Object for inheritence 
  window.BaseView = BaseView;
  
  // glocal event communication channel a good place for notifications from server or gui to other gui components
  window.Comm = _.extend({}, Backbone.Events);
});
console.log("Globals");

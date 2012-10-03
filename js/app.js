define([
  'views/app_view',
], function(AppView) {
  function App() {
    if (this.initialize)
      this.initialize.apply(this, arguments);
  };
  
  _.extend(App.prototype, Backbone.Events, {
    start: function () {
      console.log('start');
      this.app_view = new AppView();
      this.app_view.render();
      
      this.trigger("startup");
    },
    
    show: function(view) {
      console.log('a');
      this.app_view.show(view);
    },
  });
  
  var app = new App();
  window.App = app;
  
  app.start();
  return app;
});

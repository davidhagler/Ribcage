define(['app', 'views/views'], function (App, Views) {
  console.log("Paths");
  var paths = {};
  _.each(Views, function(ViewClass) {
    console.log('Path', ViewClass);
  });
  
  // manual paths.
  _.extend(paths, {
  
  });


  var Router = Backbone.Router.extend({
    routes: {    
      '': "index", 
      'test': "index"
    },
      
    index : function (arguments) {
      console.log('routed ', arguments);
    }
  });
  
  var router = new Router();
  /*router.on('route', function() {
    console.log(arguments);
  });*/
  Backbone.history.start();
  
  Backbone.history._last_path = window.location.href; 

  // track hash changes and pass to Google analytics
  Backbone.history.loadUrl = _.wrap(
    Backbone.history.loadUrl,
    
    function(func, fragmentOverride) {
      if (Backbone.history._last_path != window.location.href) {
        Comm.trigger('navigation', {
          previous: Backbone.history._last_path,
          url: window.location.href
        });
        Backbone.history._last_path = window.location.href;
      }
      return func.call(this, fragmentOverride);
    }
  );

  console.log("Router");
  return router;
});
console.log("Router");

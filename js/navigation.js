define([], function () {
  // manually create backbone history object;
  Backbone.history || (Backbone.history = new Backbone.History);
  
  Backbone.history._last_path = window.location.href; 

  Backbone.history.loadUrl = function(func, fragmentOverride) {
    console.log("loadUrl: ", fragmentOverride);
    if (Backbone.history._last_path != window.location.href) {
      this.trigger('navigation', {
        previous_url: Backbone.history._last_path,
        current_url: window.location.href
        current_hash: this.getFragment(fragmentOverride);

      });
        Backbone.history._last_path = window.location.href;
      }
      // AFAICT - backbone history itself does not depend on this piece here.
      //return func.call(this, fragmentOverride);
    }
  );
   //return router;
});
console.log("Navigation");

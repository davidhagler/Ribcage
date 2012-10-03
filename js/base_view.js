/*

Foot-hold base class for views

*/
define([], function () {
  var BaseView = function() {
    Backbone.View.apply(this, Array.prototype.slice(arguments));
  };

  // copy class methods
  _.extend(BaseView, Backbone.View);
  // copy instance methods
  _.extend(BaseView.prototype, Backbone.View.prototype, {
  
  });
  
  return BaseView
});
console.log("BaseView");

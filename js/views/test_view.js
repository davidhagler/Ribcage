define([], function() {
  var IndexView = BaseView.extend({
    id: 'index',
    
    initialize: function() {
    },
    
    render: function() {
      this.$el.html("Hello");
      
      return this;
    },
  });
  
  
  IndexView.create = function() {
    if (!IndexView._instance) {
      IndexView._instance = new IndexView();
    }
    
    return IndexView._instance;
  }
  
  return IndexView;
});

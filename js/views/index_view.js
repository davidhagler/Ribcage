define([], function() {
  var IndexView = BaseView.extend({
    path: '',
    
    id: 'index',
    
    initialize: function() {
      console.log("A");
    },
    
    render: function() {
      this.$el.html("<a href='#test'>Hello</a>");
      
      return this;
    },
  });


  window.IndexView = IndexView;
  return IndexView;
});

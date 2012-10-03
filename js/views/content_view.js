define([], function() {
  return BaseView.extend({
    id: 'container',
    
    initialize: function() {
      current_view = null;
      console.log("APP", App);
    },
    
    render: function() {
      if (this.current_view) {
        this.$el.html(view.render().el);
      }
      return this;
    },
    
    show: function(view) {
      if (this.current_view && this.current_view.close) {
        this.current_view.close();
      }
      this.current_view = view;
      if (this.current_view && this.current_view.open) {
        this.current_view.open();
      }
      this.$el.html(view.render().el);
    },
  });
});

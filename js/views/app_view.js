/*
	The app view handles all the static never changing root pieces of your DOM
	This would be your content/toolbars/footers/headers - (the containers never goes away, but they're content might)
	
	
*/
define(['views/content_view', 'views/tool_bar_view'], function(BaseView, ContentView, ToolBarView) {
  return BaseView.extend({
    el:document.body,
    
    initialize: function () {
      this.content = new ContentView();
    },

    render: function () {
      $(this.el).append(
        this.content.render().el
      );
    },
    
    show: function(view) {
      this.content.show(view);
    }
  });
});

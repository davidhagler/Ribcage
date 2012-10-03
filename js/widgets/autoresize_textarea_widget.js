define([], function() {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'autoresize active',
    
    template: $('<pre class="clone"><span></span><br></pre><textarea></textarea>'),

    events: {
      'input': function() {
        var v = this.textarea.val();
        this.textarea_clone.html(v);
      }
    },
    
    initialize: function() {
      this.$el.append(this.template);
      
      this.textarea = this.$('textarea');
      this.textarea_clone = this.$('span');
    },
    
    render: function() {
      return this;
    },
  });
});

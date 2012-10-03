define([], function() {
  function getCaret(el) { 
    if (el.selectionStart) { 
      return el.selectionStart; 
    } else if (document.selection) { 
      el.focus(); 

      var r = document.selection.createRange(); 
      if (r == null) { 
        return 0; 
      } 

      var re = el.createTextRange(), 
          rc = re.duplicate(); 
      re.moveToBookmark(r.getBookmark()); 
      rc.setEndPoint('EndToStart', re); 

      return rc.text.length; 
    }  
    return 0; 
  }

  return Backbone.View.extend({
    tagName: 'div',
    className: 'autoresize active',
    
    template: $('<pre class="clone"><span></span><br></pre> <pre class="caret"><span></span><br></pre> <textarea></textarea>'),

    events: {
      'input': function() {
        var v = this.textarea.val();
        this.textarea_clone.html(v);
        this.textarea_caret.html(v.slice(0, getCaret(this.textarea[0])) + "<span class='cursor'></span>");
      }
    },
    
    initialize: function() {
      this.$el.append(this.template);
      
      this.textarea = this.$('textarea');
      this.textarea_clone = this.$('span');
      this.textarea_caret = this.$('.caret');
    },
    
    render: function() {
      return this;
    },
  });
});

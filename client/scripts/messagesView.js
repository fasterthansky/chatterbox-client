var MessagesView = {
  html: '',
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    for (var i = 0; i < data.results.length; i++) {
      this.html += MessageRender.render({message: data.results[i].text});
    }
    this.$chats.append(this.html);
  }
};
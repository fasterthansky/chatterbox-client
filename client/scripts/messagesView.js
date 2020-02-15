var MessagesView = {
  html: '',
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    for (var i = 0; i < data.results.length; i++) {
      this.html += MessageRender.render({user: data.results[i].username, message: data.results[i].text});
    }
    this.$chats.append(this.html);
  }
};
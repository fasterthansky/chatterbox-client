var MessageRender = {

  render: _.template (

    "<div class='chat'>" +
      "<%- message %>" +
        "<div class='username'>" +
        "<%- user %>" +
        "</div>" +
        "<div></div>" +
      "</div>"
  )

};
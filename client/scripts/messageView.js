var MessageView = {

  render: _.template (

    "<div class='chat'> <%=message%>" +
        "<div class='username'></div>" +
        "<div></div>" +
      "</div>"
  )

};
var RoomsView = {
  html: '',
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomlist: {},

  initialize: function() {
  },

  render: function(data) {
    for (var i = 0; i < data.results.length; i++) {

      var message = data.results[i];
      this.roomlist[message.roomname] = message.roomname;

    }
    //grab all rooms by roomname
    //add to selection box
    //selecting a roomname clears everything, repopulates with only messages of roomname property

  }

};

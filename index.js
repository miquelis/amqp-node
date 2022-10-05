"use strict";

var rhea = require("rhea");

var desired = 0;
var received = 0;


var address = "teste"

var container = rhea.create_container();

container.on("receiver_open", function (event) {
  console.log("RECEIVE: Opened receiver for source address '" +
    event.receiver.source.address + "'");
});

container.on("message", function (event) {
  var message = event.message;

  console.log("RECEIVE: Received message '" + message.body.content + "'");

  received++;

  if (received == desired) {
    event.receiver.close();
    event.connection.close();
  }
});


var opts = {
  host: "localhost",
  port: 5672,
  username: "admin",
  password: "admin",
};

var conn = container.connect(opts);
conn.open_receiver(address);
"use strict";

const rhea = require("rhea");

let desired = 0, received = 0;

const address = "fila.teste",
  opts = {
    host: "localhost",
    port: 5672,
    username: "admin",
    password: "admin",
  };

const container = rhea.create_container();
const conn = container.connect(opts);

conn.open_receiver(address);

container.on("receiver_open", function (event) {
  console.log("RECEIVE: Opened receiver for source address '" +
    event.receiver.source.address + "'");
});

container.on("message", function (event) {
  const message = event.message;

  console.log("RECEIVE: Received message '" + message.body.content + "'");

  received++;

  if (received == desired) {
    event.receiver.close();
    event.connection.close();
  }
});


var db = require("./bdsqlite");

exports.io.on('connection', function (socket) {
    socket.on(canal, function (msg) {
      io.emit(canal, msg);
       insertar(canal, msg);
  })});
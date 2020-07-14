app.get('/', function (req, res) {

    if (canal == 'apagado') {
      res.sendFile(__dirname + '/busca_palabras.html');  }
    else {
      res.sendFile(__dirname + '/index.html');
    }
    
  
  });
  
  app.get('/count', function (req, res) {
    res.json('conectados: ' + io.sockets.server.engine.clientsCount);
  });
  
  app.get('/desconectar', function (req, res) {
    if (req.query.psw == 'adm1n') {
      canal = 'apagado';
      res.send('<b>Canal apagado</b>');
    }
    else {
      res.send('<b>Not Autorized</b>');
    }
  
  });
  
  app.get('/server', function (req, res) {
    if (req.query.psw == 'adm1n') {
      canal = req.query.canal ? req.query.canal : "default";
      res.sendFile(__dirname + '/server.html');
  
    }
    else {
      res.send('<b>Not Autorized</b>');
    }
  });
  
  app.get('/cerrarBD', function (req, res) {
    db.close();
    res.send('Cerrado BD');
  });
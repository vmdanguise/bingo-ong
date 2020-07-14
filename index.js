var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var canal = "apagado";
var express = require('express');
let insertar = require("./bdsqlite");
let bd = require("./bdsqlite");
let evento = 'default';
var pool = [];
ejs = require('ejs');

var jwt = require('jsonwebtoken');

var BodyParser = require("body-parser");
var Request = require("request");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
//app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json({limit:'10mb'}))
app.set('view engine', 'ejs');

const RECAPTCHA_SECRET = "6Ld9Zb4UAAAAALJPOExyOTXRillcspYw7UY7aQ72";


app.use(express.static('public'));
app.use('/resources', express.static(__dirname + '/recursos'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/busca_palabras.html');
}
);


app.post("/bingo", function (request, response) {

  Request(Captcha(request), function (error, resp, body) {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
      return response.send(
        `<style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');
         body {background-color: #c0392b; font-family: 'Roboto', sans-serif; color: #fff; text-align: center;}
        </style><body>Captcha validation failed</body>`
        );
    }
    if (canal == 'apagado' || request.body["evento"] != evento) {
      response.sendFile(__dirname + '/busca_palabras.html');
    }
    else {
      response.render('pages/index', {numCarton: request.body["numCarton"] });

    }
  });


});

app.get('/count', function (req, res) {
  if (req.query.psw == 'adm1n') {
    res.json(io.sockets.server.engine.clientsCount);
  }
});
app.get('/desconectar', function (req, res) {
  console.log(req.query.token);

  if (req.query.token) {
    jwt.verify(req.query.token, 'Secret Password', (err, decoded) => {      
      if (err) {
        return res.json({ mensaje: 'Token inválida' });    
      } else {
        req.decoded = decoded; 
        canal = 'apagado';
        bd.cerrarDB();
        console.log("valido");
        res.send('<b>Canal apagado y BD closed</b>');  
      }
    });
  } else {
    res.send( 
      `<style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');
         body {background-color: #c0392b; font-family: 'Roboto', sans-serif; color: #fff; text-align: center;}
        </style><body>Token no proveída.</body>`  
    );
  }

});

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/login.html');
});

function Captcha(request) {

  let recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
  recaptcha_url += "secret=" + RECAPTCHA_SECRET + "&";
  recaptcha_url += "response=" + request.body["g-recaptcha-response"] + "&";
  recaptcha_url += "remoteip=" + request.connection.remoteAddress;
  return recaptcha_url;
}

app.post("/server", function (request, response) {
  Request(Captcha(request), function (error, resp, body) {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
      return response.send(
        `<style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');
         body {background-color: #c0392b; font-family: 'Roboto', sans-serif; color: #fff; text-align: center;}
        </style><body>Captcha validation failed</body>`
      );
    }
    if (request.body["password"] == 'adm1n' && request.body["login"] == 'admin') {
      canal = "default";
      evento = request.body["evento"];
      bd.abrirDB();
      var tokenData = {
        username: 'sysadmin'
        // ANY DATA
      }
    
      var token = jwt.sign(tokenData, 'Secret Password', {
         expiresIn: 60 * 60 * 1// expires in 1 hours
      })
    
      response.render('pages/server', {tokenPar: token});
     }
    else {
      response.send(
        `<style>@import url('https://fonts.googleapis.com/css?family=Roboto:300');
        body {background-color: #c0392b; font-family: 'Roboto', sans-serif; color: #fff; text-align: center;}
       </style><body><b>Not Autorized</b></body>`
      );
    }

  });

});



io.on('connection', function (socket) {
  
  if (canal != 'apagado') {

   socket.on(canal, function (msg) {
      if (msg.includes("getNumber")) msg = getNumber();
      io.emit(canal, msg);
      bd.insertar(evento, msg);
    });

      socket.on("audioMessage", function(msg) {
        io.emit("audioMessage", msg);
      });
  }
});




http.listen(port, function () {
  console.log('listening on *:' + port);
});

function iniciarPool() {
  pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90
  ];
}

function getNumber() {
  if (pool.length == 0) {
    iniciarPool();
    return "Bolillero: Inicializando Bingo";

  }
  else {
    var index = Math.floor(pool.length * Math.random());
    var drawn = pool.splice(index, 1);
    return 'Bolillero: ' + drawn[0];
  }
};






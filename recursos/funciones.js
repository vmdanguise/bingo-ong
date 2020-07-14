function contador() {
  let c = document.getElementById('cant');
  fetch('./count?psw=adm1n')
      .then(function (response) { return response.json(); })
      .then(function (myJson) { c.innerText = myJson; })
}
function funcionesServer() {
  var socket = io();
  $(function () {
    canal = "default";
    $("button").click(function (e) {
      e.preventDefault();
      if ($(this).attr("id") == 'btnAux' && $(this).attr("value") == 'Desconectar') {
        var r = confirm("Desconecta! Con F5 vuelve a reiniciar");
        if (r == true) {
          fetch('./desconectar?token='+token).then(function (response) { return response.json(); }).then(function (myJson) { c.value = myJson; });
          $('#mb').val('Desconectando Bingo');
          socket.emit(canal, "Bolillero: ".concat($('#mb').val()));
          $('#mb').val('');
        } 
      }
      if ($(this).attr("id") == 'btnAux' && $(this).attr("value") == 'Bingo') {
        var r = confirm("Bingo!");
        if (r == true) {
          $('#mb').val('Bingo Correcto');
          socket.emit(canal, "Bolillero: ".concat($('#mb').val()));
          $('#mb').val('');
          $(this).attr("value","Desconectar") ;
        } 
      }   
      if ($(this).attr("id") == 'btnAux' && $(this).attr("value") == 'Linea') {
        var r = confirm("Linea!");
        if (r == true) {
          $('#mb').val('Linea Correcta');
          socket.emit(canal, "Bolillero: ".concat($('#mb').val()));
          $('#mb').val('');
          $(this).attr("value","Bingo") ;
        } 
      }
     if ($(this).attr("id") == 'E') {
        if ($('#mb').val() == '') $('#mb').val('getNumber');
        socket.emit(canal, "Bolillero: ".concat($('#mb').val()));
        $('#mb').val('');
      }
    });
    socket.on(canal, function (msg) {
        $('#messages').append($('<li>').text(msg));
        var elmnt = document.getElementById("scrollDiv");
        var y = elmnt.scrollHeight;
        elmnt.scrollTo(0, y);
        if (msg.includes("Bolillero")) {
          contador();     
          marcarBolillero(msg);
      } 
    });

  });
}
function marcarBolillero(msg){
  let datab = msg.substring(11, msg.length)
  $("#btd" + (parseInt(datab) - 1)).css("background", () => { return "green"; });    
}
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
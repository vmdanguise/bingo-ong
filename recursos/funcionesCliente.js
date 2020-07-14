//var numCarton = parseInt(prompt("Ingresa el nùmero de tu carton"));

var linea1 = 0;
var linea2 = 0;
var linea3 = 0;
var lineaUsada = 0;
var bingoUsado = 0;
 var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
 


function beep() {
  snd.play();
}

function funcionesCliente() {
  let element_nombre = document.getElementById("x");
  if (numCarton == "" || numCarton == null || numCarton < 1 || numCarton > 241 || isNaN(numCarton)) {
    document.body.innerHTML = '<b>Lo sentimos, necesitas comprar un carton para entrar al bingo</b>';
  }
  element_nombre.value = "Carton: " + numCarton;
  if (element_nombre.value != "") {
    canal = "default";
  }
  $("button").click(function () {
    var socket = io();
    let n = ":)";
    if ($(this).attr("id") == 'linea') {
      n = parseInt(prompt("Ingresa el nùmero a quitar de tu carton"));
      if (isNaN(n)) {
        n = parseInt(prompt("Ingresa el nùmero a quitar de tu carton, o dejas pasar la oportunidad?"));
      }
      lineaUsada = 1;
      $(this).attr("disabled",true);
    }
    if ($(this).attr("id") == 'bingo') {
       bingoUsado = 1;  
       $(this).attr("disabled",true);
    }
    $('#m').val($(this).val() + $('#m').val());
    socket.emit(canal, $('#x').val().concat(" : ", $('#m').val(), n));
    $('#m').val('');
    return false;
  });
  function marcarBolillero(msg){
    let datab = msg.substring(11, msg.length)
    $("#btd" + (parseInt(datab) - 1)).css("background", () => { return "green"; });    
  }
  $(function () {
    var socket = io();
    
    socket.on('audioMessage', function (audioChunks) {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
  });

    socket.on(canal, function (msg) {
        $('#messages').append($('<li>').text(msg));
        var elmnt = document.getElementById("scrollDiv");
        var y = elmnt.scrollHeight;
        elmnt.scrollTo(0, y);
      if (msg.includes("Bolillero")) {
        if (msg.includes("Bingo Correcto")) {bingoUsado =1; swal("Bingo en la sala!");}
        if (msg.includes("Linea Correcta")) {lineaUsada =1; swal("Linea en la sala!");}
        var elmntG = document.getElementById("z");
        elmntG.value = msg.substring(11, msg.length);
        beep();
        marcarBolillero(msg);
      }
    });

    $("td").dblclick(function (e) {
      e.preventDefault();
      var data = $(this).attr("id");
      if ($(this).attr("value") == "2") {
        $(this).css("background", () => { return "white"; });
        $(this).attr("value", "0");
        if (parseInt(data.substring(2, 5)) >= 0 && parseInt(data.substring(2, 5)) <= 8)
          linea1--;
        if (parseInt(data.substring(2, 5)) >= 9 && parseInt(data.substring(2, 5)) <= 17)
          linea2--;
        if (parseInt(data.substring(2, 5)) >= 18 && parseInt(data.substring(2, 5)) <= 26)
          linea3--;
        if (linea1 != 5 && linea2 != 5 && linea3 != 5 && lineaUsada==0  ) {
          document.getElementById("linea").disabled = true;
        }
        if ((linea1 + linea2 + linea3) != 15 && bingoUsado==0 ) {
          document.getElementById("bingo").disabled = true;
        }
      }
    });
    $("td").click(function (e) {
      e.preventDefault();
      var data = $(this).attr("id");
      if ($(this).attr("value") == "0") {
        $(this).css("background", () => { return "red"; });
        $(this).attr("value", "2");
        if (parseInt(data.substring(2, 5)) >= 0 && parseInt(data.substring(2, 5)) <= 8)
          linea1++;
        if (parseInt(data.substring(2, 5)) >= 9 && parseInt(data.substring(2, 5)) <= 17)
          linea2++;
        if (parseInt(data.substring(2, 5)) >= 18 && parseInt(data.substring(2, 5)) <= 26)
          linea3++;
        if ((linea1 == 5 || linea2 == 5 || linea3 == 5) && lineaUsada==0 ) {
          document.getElementById("linea").disabled = false;
        }
        if ((linea1 + linea2 + linea3) == 15 && bingoUsado == 0) {
          document.getElementById("bingo").disabled = false;
        }
      }
    });
  });

  
  
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function cargar() {
  let i = 0;
  for (i = 0; i < 27; i++) {
    var celda = document.getElementById("td".concat(i));
    if (carton[numCarton - 1][i] != 0) { 
      celda.setAttribute("style", "background:white;")
      celda.setAttribute("value", "0")
      celda.innerHTML = carton[numCarton - 1][i];
    }
    else {
      celda.setAttribute("style", "background:black;")
      celda.setAttribute("value", "1")
    }
  }
}




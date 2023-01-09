function encriptar(){
    var mensaje = document.getElementById("textoEntrada").value.toLowerCase();
    var msgEncriptado = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober")
    .replaceAll("u","ufat");
    document.getElementById("imaDerecha").style.display="none";
    document.getElementById("textoRef").style.display="none";
    document.getElementById("textoSalida").innerHTML = msgEncriptado;
    document.getElementById("textoEntrada").value = "Mensaje encriptado...";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
   
}

function desencriptar(){
    var mensaje = document.getElementById("textoEntrada").value.toLowerCase();
    var msgEncriptado = mensaje.replaceAll("enter","e")
    .replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o")
    .replaceAll("ufat","u");
    document.getElementById("imaDerecha").style.display="none";
    document.getElementById("textoRef").style.display="none";
    document.getElementById("textoSalida").innerHTML = msgEncriptado;
    document.getElementById("textoEntrada").value = "Mensaje desencriptado...";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function copiar(){
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand('copy');
    //contenido.value="";
    document.getElementById("textoEntrada").value = "";
    document.getElementById("textoEntrada").focus();
    alert("Copiado al portapapeles");
}



var mensaje2 = document.getElementById("textoSalida");

// var boton = document.getElementById("encriptar");
// var boton1 = document.getElementById("desencriptar");
// var boton2 = document.getElementById("copiar");
// boton.onclick = encriptar;
// boton1.onclick = desencriptar;
// boton2.onclick = copiar;
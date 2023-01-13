function encriptar(){
    var mensaje = document.getElementById("textoEntrada").value.toLowerCase();
    mensaje = darFormato(mensaje);
    var msgEncriptado = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober")
    .replaceAll("u","ufat");
    document.getElementById("imaDerecha").style.display="none";
    document.getElementById("textoRef").style.display="none";
    document.getElementById("textoSalida").innerHTML = msgEncriptado;
    document.getElementById("textoEntrada").value = "Mensaje encriptado...";
    document.getElementById("textoEntrada").style.background = "url('imagenes/matrix.jpg')";
    document.getElementById("textoEntrada").style.color = "yellow";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    document.getElementById("textoSalida").disabled = false;
   
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
    document.getElementById("textoEntrada").style.background = "url('imagenes/matrix.jpg')";
    document.getElementById("textoEntrada").style.color = "yellow";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    document.getElementById("textoSalida").disabled = false;
}

function copiar(){
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand('copy');
    document.getElementById("textoEntrada").style.background = "rgba(183, 215, 219, 0.788)";
    document.getElementById("textoEntrada").style.color = "#0A3871";
    // document.getElementById("textoSalida").value = "";
    document.getElementById("textoEntrada").value = "";
    document.getElementById("textoEntrada").focus();
    alert("Copiado al portapapeles");
}

var mensaje2 = document.getElementById("textoSalida");


// Autor Samuel Tique
function darFormato(cadena){
    
    let aMinus = cadena.replace(/[áàäâ]/g,'a');
    let eMinus = aMinus.replace(/[éèëê]/g,'e');
    let iMinus = eMinus.replace(/[íìïî]/g,'i');
    let oMinus = iMinus.replace(/[óòöô]/g,'o');
    let uMinus = oMinus.replace(/[úùüû]/g,'u');
    let enieMinus = uMinus.replace(/[ñ]/g,'n');
    let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');

    return resultado;
}
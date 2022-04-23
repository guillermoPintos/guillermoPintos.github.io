var textoParaEncriptar = document.getElementById("texto-encriptar");/*Linea 19 del html index, traigo el contenido del textarea por id*/
var mensajeEncriptado = document.getElementById("mensaje");/*Linea 29 del html index, traigo el contenido del textarea por id*/

/*El método addEventlistener, es un escuchador que indica al navegador 
que este atento a la interacción del usuario. La ventaja es que se escribe totalmente en el JS,
 sin necesidad de tocar el HTML. Su sintaxis es muy sencilla: target. 
 en este caso se requieren tres parámetros: el nombre del "event listener", 
 una referencia a la función encargada de
  procesar el evento y el tipo de flujo de eventos al que se aplica.*/

var botonEncriptar = document.getElementById("boton-Encriptado");

var botonDesencriptar = document.getElementById("boton-Desencriptado");

botonEncriptar.addEventListener("click", encriptar);/*traemos el boton de encriptado guardado en la variable. Le pasamos la funcion */
function encriptar() {
  var frase = document.getElementById("texto-encriptar").value;
  if (frase.match(/^[a-z ]*$/)) { /*verificamos que no se hayan ingresado letras mayúsculas o caracteres especiales*/
    frase = frase.replaceAll("e", "enter");
    frase = frase.replaceAll("i", "imes");
    frase = frase.replaceAll("a", "ai");
    frase = frase.replaceAll("o", "ober");
    frase = frase.replaceAll("u", "ufat");
    document.getElementById("mensaje").value = frase;
    document.getElementById("texto-encriptar").value = "";
  } else {
    alert("No utilizar mayúsculas ni caracteres especiales")
  }
  
}

botonDesencriptar.addEventListener("click", desencriptar);

function desencriptar() {

  var frase = document.getElementById("texto-encriptar").value;
  if (frase.match(/^[a-z ]*$/)) {
  for (let i = 0; i < frase.length; i++) {
    frase = frase.replace("enter", "e");
    frase = frase.replace("imes", "i");
    frase = frase.replace("ai", "a");
    frase = frase.replace("ober", "o");
    frase = frase.replace("ufat", "u");
    document.getElementById("mensaje").value = frase;
  }
  }else {
    alert("No utilizar mayúsculas ni caracteres especiales")
    }
}



function copiarMensaje() {
  var copiarTexto = document.getElementById("mensaje");
  copiarTexto.select();
  document.execCommand("copy");
}
document.querySelector("#copiado").addEventListener("click", copiarMensaje);

const nombre = document.getElementById("Mane")
const apellido = document.getElementById("surn")
const años = document.getElementById("tick")
const Año = document.getElementById("Año")

const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")
const anosResultado = document.getElementById("respuestaAños")
const anoResultado = document.getElementById("respuestaAño")


function validar(){

   nombreResultado.innerText = " Nombre: " + nombre.value
   apellidoResultado.innerText = " apellido: " + apellido.value
   anosResultado.innerText = " años: " + años.value
   anoResultado.innerText = " Año de nacimiento: " + Año.value

}
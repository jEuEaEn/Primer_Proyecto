const nombre = document.getElementById("Mane")
const apellido = document.getElementById("surn")
const años = document.getElementById("tick")

const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")
const anosResultado = document.getElementById("respuestaAños")


function validar(){

   nombreResultado.innerText = " Nombre: " + nombre.value
   apellidoResultado.innerText = " apellido: " + apellido.value

   if (años.value <= 18){

     anosResultado.innerText = " Estado: Menor de Edad "+ años.value

   }else{

     anosResultado.innerText = " Estado: Mallor de Edad y "+ años.value

   }

}
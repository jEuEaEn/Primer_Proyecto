/* Cuadro de arriba */
const nombre = document.getElementById("Mane")
const apellido = document.getElementById("surn")
const años = document.getElementById("tick")

/* Cuadro de abajo */
const funda = document.getElementById("fondo1")
const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")
const anosResultado = document.getElementById("respuestaAños")

/* Temas */
const claro = document.getElementById("fondo2")
const oscuro = document.getElementById("fondo3")


function tema(){

document.body.classList.toggle("dark")

}


function validar(){

   nombreResultado.innerText = nombre.value
   apellidoResultado.innerText = apellido.value




   if( nombre.value.trim() == "" || apellido.value.trim() == "" ){
    alert("Tienes que llenar las casillas")

   }else{

   const edadNumero = parseInt(años.value)
   
   if ( edadNumero <= 18){

     anosResultado.innerText = " Estado: Menor de Edad con "+ años.value + " años"
     funda.classList.add("Menor")
     funda.classList.remove("Mayor")

   }else{

     anosResultado.innerText = " Estado: Mayor de Edad con "+ años.value + " años"
     funda.classList.remove("Menor")
     funda.classList.add("Mayor")

   }

   }


}
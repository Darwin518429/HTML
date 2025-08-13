

const botones = document.querySelectorAll(" li "); 

const encabezado = document.querySelector(" header");
const formulario = document.querySelector(" .contenedor"); 
const foto = document.getElementById("fotofondo");
const  pie = document.querySelector(" footer "); 
const cambio = document.getElementById("cambio"); 
const tarjetas = document.querySelectorAll(".foot"); 

 const  botonform = document.querySelector("#botonForm"); 

function color(){
  alert("Tema cambiado"); //Pa avisar

  /*Aplico clases  pero se pueden revertir */
  cambio.classList.toggle("cambiocolor"); 
botonform.classList.toggle("cambiocolor");
  for (let i = 0; i < 5; i++) {
    botones[i].classList.toggle("cambiocolor"); 
  }
 for (let i = 0; i < 3; i++) { 
   tarjetas[i].classList.toggle("cambiocolor");
  }

  encabezado.classList.toggle("cambiocolor");
 pie.classList.toggle("cambiocolor");
 formulario.classList.toggle("cambiocolor");

}


cambio.addEventListener("click", color); // al apretar el boton ejecutara ala funcion color
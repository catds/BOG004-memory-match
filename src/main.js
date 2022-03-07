import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
let dataTarjetas = ghibli.items
dataTarjetas = dataTarjetas.concat(dataTarjetas);
console.log("Data", dataTarjetas);

document.getElementById('contenedor-cards').style.display = 'none';
function iniciarJuego() {
    document.getElementById('contenedor-cards').style.display = 'grid';
    document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('felicitaciones').style.display = 'none';
    
  }
  document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)
  
  document.getElementById('contenedor-bienvenida').style.display = 'none';
  document.getElementById('contenedor-cards').style.display = 'none';
  function reiniciar(){
    document.getElementById('felicitaciones').style.display = 'block';
    document.getElementById('contenedor-bienvenida').style.display = 'block';
    document.getElementById('contenedor-cards').style.display = 'none';


  }
  document.getElementById('reiniciar').addEventListener('click',reiniciar);
   //como hacer que el escuchador se active cuando todas las cartas hagan match

App(dataTarjetas);

export default dataTarjetas;

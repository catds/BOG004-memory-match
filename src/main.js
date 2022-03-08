//leer sobre import y export de objetos
import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";

let dataTarjetas = ghibli.items

function init () {
  dataTarjetas = dataTarjetas.concat(dataTarjetas);
  // console.log("Data", dataTarjetas);
  
  document.getElementById('contenedor-cards').style.display = 'none';
  document.getElementById('felicitaciones').style.display = 'none';
  
  document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)
 
  App(dataTarjetas);
  }

function iniciarJuego() {
    document.getElementById('contenedor-cards').style.display = 'grid';
    document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('felicitaciones').style.display = 'none';
  }

  function volverAJugar(){
    document.getElementById('felicitaciones').style.display = 'block';
    document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('contenedor-cards').style.display = 'none';
    document.getElementById('volverAJugar').addEventListener('click',volverAJugar);
    // document.getElementById('contenedor-bienvenida').style.display = 'block';
  }


window.onload = init

export default {dataTarjetas, volverAJugar};

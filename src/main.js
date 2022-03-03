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
    
  }
  document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)

App(dataTarjetas);

export default dataTarjetas;

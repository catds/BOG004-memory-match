import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
const dataTarjetas = ghibli.items;
console.log("Data", dataTarjetas);
//document.getElementById('root').appendChild(App());
//document.getElementsByClassName('card').appendChild(App());
//const contenedor = document.getElementById("contenedor-cards").appendChild(card)
//card.innerHTML = contenido;
// const crearCard = (itemPelicula) => {
//     const card = document.createElement('div');
//     card.className = "card"
//     const contenido = `<img src="${itemPelicula.image}">`
//     card.innerHTML = contenido;
//     const contenedor = document.getElementById("contenedor-cards").appendChild(card)
App(dataTarjetas);

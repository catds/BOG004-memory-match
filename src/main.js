import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
const dataTarjetas = ghibli.items;
console.log("Data", dataTarjetas);

App(dataTarjetas);

export default dataTarjetas;

import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
let dataTarjetas = ghibli.items
dataTarjetas = dataTarjetas.concat(dataTarjetas);
console.log("Data", dataTarjetas);


App(dataTarjetas);

export default dataTarjetas;

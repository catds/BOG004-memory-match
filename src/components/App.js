//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import ghibli from '../data/ghibli/ghibli.js';
console.log(ghibli);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const crearCard = (itemPelicula) => {
  const card = document.createElement('div');
  card.className = "card"
  const contenido = `<img src="${itemPelicula.image}">`
  card.innerHTML = contenido;
  const contenedor = document.getElementById("contenedor-cards").appendChild(card)
  //card.className = 'App';
  //card.textContent = card;


  //return card;


/*const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el; */
};

const App = () => {
for(let i=1; i<=2; i++){
  ghibli.items.forEach((itemPelicula)=>{
  crearCard(itemPelicula)
})}
};

// const frutas = ['🍍','🍎','🍊','🍎','🍊','🍎','🍊','🍋','🍓','🍒','🍍'];
// for(let i = frutas.length - 1; i > 0; i--){
//   const randomIndex = Math.floor(Math.random() * (i + 1));
//   const copia = frutas[i];
//   frutas[i] = frutas[randomIndex]
//   frutas[randomIndex] = copia
// }
// console.log(frutas)

const mix = [itemPelicula.image];
for(let i = itemPelicula.image.length - 1; i > 0; i--){
  const randomIndex = Math.floor(Math.random() * (i + 1));
  const copia = itemPelicula.image[i];
  itemPelicula.image[i] = itemPelicula.image[randomIndex]
  itemPelicula.image[randomIndex] = copia
}

console.log(itemPelicula.image)


export default App;
//src="${itemPelicula.img}"
// `<p>${itemPelicula.id}</p>`
// `<src="${itemPelicula.img}">`

// for (variable:arreglo)
// {
// imprima (nombre[i])
// i++
// }

//Ejemplo aprenderaprogramar.com

//public void listarTodosLosNombres () {
  //for (String i: listaDeNombres) {
  //System.out.println (i); //Muestra cada uno de los nombres dentro de listaDeNombres
//}
//}
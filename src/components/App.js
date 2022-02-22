/*const crearCard = (itemPelicula) => {
  const card = document.createElement('div');
  card.className = "card"
  const contenido = `<img src="${itemPelicula.image}">`
  card.innerHTML = contenido;
  const contenedor = document.getElementById("contenedor-cards").appendChild(card)


};*/
//llamar la funcion para que funcione
// import dataTarjetas";

const App = (data) => {
  for (let i = 1; i <= 2; i++) {
    data.forEach((elemento) => {
      const card = document.createElement("div");
      card.className = "card";
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      document.getElementById("contenedor-cards").appendChild(card);
    });
  }

  //crear una variable global para guardar y poder
const card = elemento.image;
    const mix = [card.items];
    console.log(mix)
    for(let i = mix.length - 1; i > 0; i--){
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const copia = mix[i];
      mix[i] = mix[randomIndex]
      mix[randomIndex] = copia
    }
    console.log(mix)
    return card
  };


// const frutas = ['🍍','🍎','🍊','🍎','🍊','🍎','🍊','🍋','🍓','🍒','🍍'];
// for(let i = frutas.length - 1; i > 0; i--){
//   const randomIndex = Math.floor(Math.random() * (i + 1));
//   const copia = frutas[i];
//   frutas[i] = frutas[randomIndex]
//   frutas[randomIndex] = copia
// }
// console.log(frutas)

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

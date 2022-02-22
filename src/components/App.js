/*const crearCard = (itemPelicula) => {
  const card = document.createElement('div');
  card.className = "card"
  const contenido = `<img src="${itemPelicula.image}">`
  card.innerHTML = contenido;
  const contenedor = document.getElementById("contenedor-cards").appendChild(card)


};*/
//llamar la funcion para que funcione
// import dataTarjetas";
const randomize = () => {
  const data = dataTarjetas ();
  data.sort(() => Math.random ());
  console.log(data);
  
}; 

const App = (data) => {
  const data = randomize();
  for (let i = 1; i <= 2; i++) {
    data.forEach((elemento) => {
      const card = document.createElement("div");
      card.className = "card";
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      document.getElementById("contenedor-cards").appendChild(card);
    });
  }

 



export default App;
}

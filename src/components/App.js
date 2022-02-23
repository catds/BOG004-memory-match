
const App = (data) => {

  const randomize = () => {
    const dataTarjetas = data;
    dataTarjetas.sort(() => Math.random() - 0.5)
    // return dataTarjetas
  };
  randomize();

  // for (let i = 1; i <= 2; i++) {
    data.forEach((elemento) => {
      const card = document.createElement("div");
      const back = document.createElement("div");
      card.className = "card";
      back.className = "back"
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      document.getElementById("contenedor-cards").appendChild(card);
    });
  // }


  // console.log(dataMix);
  // for (let i = dataTarjetas.length - 1; i > 0; i--) {
  //   const randomIndex = Math.floor(Math.random() * (i + 1));
  //   const copia = dataTarjetas[i];
  //   dataTarjetas[i] = dataTarjetas[randomIndex];
  //   dataTarjetas[randomIndex] = copia;
  // }
  // console.log(dataMix);
  // return dataMix;

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
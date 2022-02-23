// import dataTarjetas from "..main"

const App = (data) => {

  const randomize = () => {
    const dataTarjetas = data;
    const dataMix = [dataTarjetas];
    dataTarjetas
    dataTarjetas.sort(() => Math.random() - 0.5)
    return dataTarjetas
    // console.log(dataTarjetas);
  };
  randomize();

  for (let i = 1; i <= 2; i++) {
    data.forEach((elemento) => {
      const card = document.createElement("div");
      card.className = "card";
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      document.getElementById("contenedor-cards").appendChild(card);
    });
  }


  // console.log(dataMix);
  // for (let i = dataMix.length - 1; i > 0; i--) {
  //   const randomIndex = Math.floor(Math.random() * (i + 1));
  //   const copia = dataMix[i];
  //   dataMix[i] = dataMix[randomIndex];
  //   dataMix[randomIndex] = copia;
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
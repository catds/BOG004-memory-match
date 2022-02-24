

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
      back.className = "back";
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      card.addEventListener("click",()=>{
        back.classList.toggle("backhidden")
      })
      card.appendChild(back);
      document.getElementById("contenedor-cards").appendChild(card);
  
      
      
    });
}

export default App;


const App = (data) => {

  const randomize = () => {
    const dataTarjetas = data;
    dataTarjetas.sort(() => Math.random() - 0.5)
    // return dataTarjetas
  };
  randomize();

  // for (let i = 1; i <= 2; i++) {
    let toggleCards = []

    data.forEach((elemento) => {
      const card = document.createElement("div");
      const back = document.createElement("div");
      card.className = "card";
      back.className = "back";
      back.setAttribute('name', elemento.name)
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      card.addEventListener("click",(e)=>{
      back.classList.toggle("backhidden")
      checkCards(e);
      // console.log(1,e.target)
      })
//borrar posicion 0 y 1 y reiniciar. borrar o un ciclo(?) intenta con un for                                                                                                                                                                                    . Agregar siempre el alt. No spanglish


      card.appendChild(back);
      document.getElementById("contenedor-cards").appendChild(card);
      const checkCards = (e) => {
        const clickedCard = e.target

        toggleCards.push(clickedCard)
        // const toggleCards = document.querySelectorAll('.toggle');
        clickedCard.classList.add("toggle");
        console.log(toggleCards.length)
        console.log(e.target)
        // for (let i = 0; i = 1; i++){
          if(toggleCards.length===2){
            if(toggleCards[0].getAttribute('name')===toggleCards[1].getAttribute('name'))
            {
              // console.log(toggleCards[0].getAttribute('name'))
              toggleCards.style.pointerEvents = 'none';
              console.log("match");
            } else{
              // console.log(toggleCards[0].getAttribute('name'))
              console.log("noMatch")
              toggleCards.forEach((card) => {
                clickedCard.classList.remove("toggle");
              })
            }
          }
        // };


      }

    });

    // cardGenerator();
}

export default App;
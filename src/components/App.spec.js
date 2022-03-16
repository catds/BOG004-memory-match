/*** @jest-environment jsdom
 */

import App from "./App.js";

describe("App", () => {
  xit("deberia mostrarse la interfaz", () => {
    document.body.innerHTML = '<div id="contenedor-cards"></div>';
    App();
    const el = document.getElementById("contenedor-cards");
    expect(App()).toBe();
  });

  it("deberia mostrar una carta por cada elemento del array", () => {
    document.body.innerHTML = '<div id="contenedor-cards"></div>';
    App([
      {
        id: "",
        image: "",
      },
    ]);
    const cards = document
      .getElementById("contenedor-cards")
      .querySelectorAll(".card");
    expect(cards.length).toBe(1);
  });

  xit("deberia hacer el match de las tarjetas", () => {
    document
      .getElementById("iniciar juego")
      .addEventListener("click", iniciarJuego);
    expect(true).toBe(true);
  });

  it("deberia hacer el match de las tarjetas", () => {
    const toggleCards =
      toggleCards[0].getAttribute("name") ===
      toggleCards[1].getAttribute("name");

    expect(toggleCards).toEqual([0], [1]);
  });
});

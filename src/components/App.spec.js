/*** @jest-environment jsdom
 */

import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    document.body.innerHTML= '<div id="contenedor-cards"></div>'
    App();
    //const el = document.getElementById("contenedor-cards");
    expect(true).toBe(true);
  });

  it('should render 1 cards by each array element', () => {
    document.body.innerHTML= '<div id="contenedor-cards"></div>'
    App([
      {
        id: '',
        image: '',
      },
    ]);
    const cards = document.getElementById("contenedor-cards").querySelectorAll('.card');
    expect(cards.length).toBe(1);
  });

//   it('should play when user click on play button', () => {
//     document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)
//     expect(true).toBe(true)
//   })
});

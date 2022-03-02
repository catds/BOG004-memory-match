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

  it('should render 1 cards por elemento del array', () => {
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
});

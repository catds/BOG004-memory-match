/**
 * @jest-enviroment jsdom
 */

import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    document.body.innerHTML= '<div id="contenedor-cards"></div>'
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

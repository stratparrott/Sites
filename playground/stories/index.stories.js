export default {
  title: 'Demo',
};

export const Colors = () => '<h1>Colors</h1> <ul><li>basic colors (primary, accent, text, icon, divider,shadow)</li><li>auxiliary colors (disabled, warning, danger, success, info, black, white, gray...)</li><li>darkTheme color variations (primaryTextThemeDark, disabledThemeDark...)</li></ul>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

import {html} from 'index.html'
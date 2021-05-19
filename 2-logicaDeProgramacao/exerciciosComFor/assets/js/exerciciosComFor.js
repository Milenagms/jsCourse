
const elementos = [
  {tag: 'p', texto: 'texto1'},
  {tag: 'div', texto: 'texto2'},
  {tag: 'section', texto: 'texto3'},
  {tag: 'footer', texto: 'texto4'},
];

const container =document.querySelector('.container');
const div = document.createElement('div');

for ( let i = 0; i < elementos.length; i++ ){
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
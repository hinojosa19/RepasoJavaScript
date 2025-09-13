
const titulo = document.getElementById('titulo');
const descripcion = document.querySelector('.descripcion');
const lista = document.getElementById('lista');
const boton = document.getElementById('boton');


boton.addEventListener('click', () => {
  
  titulo.textContent = 'Título modificado';
  descripcion.textContent = 'Este texto ha sido actualizado con JavaScript.';

  
  const elementos = lista.querySelectorAll('li');
  elementos.forEach(el => {
    el.classList.toggle('activo');
  });
  items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'lightblue';
  });
  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = '';
  });

});

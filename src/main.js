import data from './data/ghibli/ghibli.js';

console.log(data.films);
console.log(data.films[0].title);


const dataFilms = data.films;

console.log(dataFilms.map(film => film.title))


const nav_history = document.querySelector('.nav-history');
const modal = document.getElementById('modal')

function mostrarModal() {

  console.log('esatas dentro')
  modal.showModal()

}

nav_history.addEventListener('click', mostrarModal())




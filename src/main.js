import data from './data/ghibli/ghibli.js';

console.log(data.films);
console.log(data.films[0].title);


const dataFilms = data.films;

console.log(dataFilms.map(film => film.title))




const link_movies = document.querySelector('.nav-movies')
const main = document.querySelector('.container-main')
const movie = document.querySelector('.pageMovie')

movie.style.display = 'none'
//MODAL


//PAGE MOVIES
function pageMovies(e) {
  e.preventDefault()
  main.style.display = 'none'
  movie.style.display = 'block'
}

//Modal history
const nav_history = document.querySelector('.nav-history');
const modal = document.getElementById('modal');
const close_modal = document.getElementById('close-modal');

nav_history.addEventListener('click', (e) => {
  e.preventDefault()
  modal.showModal()
})
close_modal.addEventListener('click', () => {
  modal.close()
})

//Modal-movies
const img_modal = document.querySelector('.img-modal')
const close_modal_card = document.querySelector('.close-movie')
const modal_card = document.querySelector('.modal-movie')
img_modal.addEventListener('click', (e) => {
  e.preventDefault()
  modal_card.showModal()
})

close_modal_card.addEventListener('click', () => {
  modal_card.close()
})




link_movies.addEventListener('click', pageMovies)

import data from './data/ghibli/ghibli.js';

console.log(data.films);
console.log(data.films[0].title);


const dataFilms = data.films;

console.log(dataFilms.map(film => film.title))





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

//Page Movies
const main = document.querySelector('.container-main');
const movie = document.querySelector('.pageMovie');
const link_movies = document.querySelector('.nav-movies');
link_movies.addEventListener('click', (e) => {
  e.preventDefault()
  main.style.display = 'none'
  character.style.display = 'none'
  movie.style.display = 'block'
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

//Page Characters
const character = document.querySelector('.pageCharacters');
const link_character = document.querySelector('.nav-characteres');
link_character.addEventListener('click', (e) => {
  e.preventDefault()
  main.style.display = 'none'
  movie.style.display = 'none'
  character.style.display = 'block'
})
//Modal Characters
const img_character = document.querySelector('.img-character')
const close_modal_character = document.querySelector('.close-character')
const modal_character = document.querySelector('.modal-character')
img_character.addEventListener('click', (e) => {
  e.preventDefault()
  modal_character.showModal()
})

close_modal_card.addEventListener('click', () => {
  close_modal_character.close()
})

movie.style.display = 'none'
character.style.display = 'none'

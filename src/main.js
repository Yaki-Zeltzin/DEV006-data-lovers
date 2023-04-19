import data from './data/ghibli/ghibli.js';

const dataFilms = data.films;
const dataCharacters = dataFilms.map(l => l.people)

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

  showMovies(dataFilms)
})

//Page Characters
const character = document.querySelector('.pageCharacters');
const link_character = document.querySelector('.nav-characteres');
link_character.addEventListener('click', (e) => {
  e.preventDefault()
  main.style.display = 'none'
  movie.style.display = 'none'
  character.style.display = 'block'
  showCharacters(dataCharacters)
})

movie.style.display = 'none'
character.style.display = 'none'


//Show cards of movies
function showMovies(data) {
  const cardsMovies = document.querySelector('.cards');
  data.map((movie) => {
    const card = document.createElement('div')
    card.classList.add("card")
    card.innerHTML =
      `
    <img id="${movie.title}" class="img-modal" src="${movie.poster}" alt="${movie.title}">
     <div class="info-card">
         <p class="info-title">${movie.title}</p>
         <p class="year">${movie.release_date}</p>
     </div>
    `
    cardsMovies.appendChild(card);
    const element = document.getElementById(movie.title)
    //console.log(element)
    element.addEventListener('click', function (e) {
      console.log(element)
      openModal(e, movie)
    })
  })
}


//Modal-movies
const modal_card = document.querySelector('.modal-movie')
const close_modal_card = document.querySelector('.close-movie')
function openModal(e, movie) {
  e.preventDefault()

  const img = modal_card.querySelector('img');
  const title = modal_card.querySelector('.title');
  const year = modal_card.querySelector('.year');
  const direct = modal_card.querySelector('.direct');
  const sinopsis = modal_card.querySelector('.sinopsis');
  const score = modal_card.querySelector('.score');

  img.setAttribute('src', movie.poster);
  title.textContent = movie.title;
  year.textContent = movie.year;
  direct.textContent = movie.direct;
  sinopsis.textContent = movie.description;
  score.textContent = 'Score: ' + movie.rt_score;
  modal_card.style.display = 'block';

}


close_modal_card.addEventListener('click', () => {
  modal_card.style.display = 'none'
})


//Show cards of characters
function showCharacters(data) {
  const cardsMovies = document.querySelector('.characters');
  for (let index = 0; index < data.length; index++) {
    data[index].map(character => {
      const card = document.createElement('div')
      card.classList.add("card_char")
      card.innerHTML =
        `
      <img class="img-character" id="${character.name}" src=${character.img} alt=${character.name}>
      <div class="info-card">
        <p class="info-title">Name: ${character.name}</p>
        <p class="year">Age: ${character.age}</p>
        <p class="direct">Director: ${character.direct}</p>
        <p class="specie">Specie: ${character.specie}</p>
        <p class="gender">Gender: ${character.gender}</p>
      </div>
       `
      cardsMovies.appendChild(card);
      const element = document.getElementById(character.name)
      element.addEventListener('click', function (e) {
        openModal(e, character)
      })

    })
  }
}


// Return Button Movies
const backButton = document.querySelector(".return");
backButton.addEventListener("click", (e) => {
  e.preventDefault()
  main.style.display = "block"
  character.style.display = 'none'
  movie.style.display = 'none'
})

// Return Button Characters
const backButton2 = document.querySelector(".return2");
backButton2.addEventListener("click", (e) => {
  e.preventDefault()
  main.style.display = "block"
  character.style.display = 'none'
  movie.style.display = 'none'
})




//Ordenar películas A - Z
export function dataFilmsSort(arr) {
  const arrResult = arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

//Ordenar películas Z - A
export function dataFilmsReverse(arr) {
  const arrResult = arr.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}


// Ordenar
const order = document.querySelector("#sort");
order.addEventListener("change", () => {
  const indexSelect = order.selectedIndex;
  if (indexSelect === 1) {
    const dataOrdered = dataFilmsSort(dataFilms);
    showMovies(dataOrdered);
  } else if (indexSelect === 2) {
    const dataReverse = dataFilmsReverse(dataFilms);
    showMovies(dataReverse);
  }

})


//Add to options characters
// const optionsDirectors = document.getElementById('filterCharact');
// dataFilms.forEach(direct => {
//   const options = document.createElement('option')
//   options.value = direct.director;
//   console.log(direct.director)
// });


// createOptions(dataFilms)


// const arrDirectors = [];
// dataFilms.forEach((element) => {
//   arrDirectors.push(element.director);
// });
// const uniqueDirectors = arrDirectors.filter((value, index) => {
//   console.log(arrDirectors.indexOf(value) === index)
//   console.log(value, index)

// });

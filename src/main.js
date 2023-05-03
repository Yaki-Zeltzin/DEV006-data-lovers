import data from './data/ghibli/ghibli.js';
import {
  dataFilmsSort,
  dataFilmsReverse,
  filter as filterByDirector
} from './data.js'

const dataFilms = data.films;
const dataCharacters = dataFilms.map(l => l.people)
const directors = dataFilms.map(direct => direct.director)
const Character = dataFilms.map(direct => direct.title)

//Remove duplicate directors
function removeDuplicates(arr) {
  return arr.filter((valor, indice) => {
    return arr.indexOf(valor) === indice;
  })
}
const optionsDirects = removeDuplicates(directors)
const optionsCharacter = removeDuplicates(Character)

//Paint Options Directors
function paintOptions(arr) {
  const selectM = document.querySelector('.filterM');
  arr.map(a => {
    const eOption = document.createElement('option');
    eOption.textContent = a
    selectM.appendChild(eOption);
  })
}
paintOptions(optionsDirects)

//Paint Options Movies
function PaintOptions(arr) {
  const selectC = document.querySelector('#filterCharact');
  arr.map(a => {
    const eOption = document.createElement('option');
    eOption.textContent = a
    selectC.appendChild(eOption)
  })
}
PaintOptions(optionsCharacter)

const select = document.querySelector('.filterM');
select.addEventListener('change', (e) => {
  if (e.target.value === "Hayao Miyazaki") {
    filter(dataFilms, "Hayao Miyazaki")
  } else if (e.target.value === "Isao Takahata") {
    filter(dataFilms, "Isao Takahata")
  } else if (e.target.value === "Yoshifumi Kondō") {
    filter(dataFilms, "Yoshifumi Kondō")
  } else if (e.target.value === "Hiroyuki Morita") {
    filter(dataFilms, "Hiroyuki Morita")
  } else if (e.target.value === "Gorō Miyazaki") {
    filter(dataFilms, "Gorō Miyazaki")
  } else if (e.target.value === "Hiromasa Yonebayashi") {
    filter(dataFilms, "Hiromasa Yonebayashi")
  }
})

//filter
function filter(data, condition) {
  const filteredMovies = filterByDirector(data, condition);
  const cardsMovies = document.querySelector('.cards');
  cardsMovies.innerHTML = '';
  filteredMovies.forEach(movie => {
    const m = movie;
    const card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML =
      `
       <img id="${m.title}" class="img-modal" src="${m.poster}" alt="${movie.title}">
       <div class="info-card">
           <p class="info-title">${m.title}</p>
           <p class="year">${m.release_date}</p>
           <p class="year">${m.director}</p>
       </div>
       `
    cardsMovies.appendChild(card);
    const element = document.getElementById(movie.title);
    element.addEventListener('click', function (e) {
      openModal(e, movie);
    })
  })
}

//Filter Character
const selectC = document.querySelector('#filterCharact');
selectC.addEventListener('change', (e) => {
  if (e.target.value === "Castle in the Sky") {
    filterf(dataFilms, "Castle in the Sky");
  } else if (e.target.value === "My Neighbor Totoro") {
    filterf(dataFilms, "My Neighbor Totoro");
  } else if (e.target.value === "Kiki's Delivery Service") {
    filterf(dataFilms, "Kiki's Delivery Service");
  } else if (e.target.value === "Grave of the Fireflies") {
    filterf(dataFilms, "Grave of the Fireflies");
  } else if (e.target.value === "Only Yesterday") {
    filterf(dataFilms, "Only Yesterday");
  } else if (e.target.value === "Porco Rosso") {
    filterf(dataFilms, "Porco Rosso");
  } else if (e.target.value === "Pom Poko") {
    filterf(dataFilms, "Pom Poko");
  } else if (e.target.value === "Whisper of the Heart") {
    filterf(dataFilms, "Whisper of the Heart");
  } else if (e.target.value === "Princess Mononoke") {
    filterf(dataFilms, "Princess Mononoke");
  } else if (e.target.value === "My Neighbors the Yamadas") {
    filterf(dataFilms, "My Neighbors the Yamadas");
  } else if (e.target.value === "Spirited Away") {
    filterf(dataFilms, "Spirited Away");
  } else if (e.target.value === "The Cat Returns") {
    filterf(dataFilms, "The Cat Returns");
  } else if (e.target.value === "Howl's Moving Castle") {
    filterf(dataFilms, "Howl's Moving Castle");
  } else if (e.target.value === "Tales from Earthsea") {
    filterf(dataFilms, "Tales from Earthsea");
  } else if (e.target.value === "Ponyo on the Cliff by the Sea") {
    filterf(dataFilms, "Ponyo on the Cliff by the Sea");
  } else if (e.target.value === "The Secret World of Arrietty") {
    filterf(dataFilms, "The Secret World of Arrietty");
  } else if (e.target.value === "From Up on Poppy Hill") {
    filterf(dataFilms, "From Up on Poppy Hill");
  } else if (e.target.value === "The Wind Rises") {
    filterf(dataFilms, "The Wind Rises");
  } else if (e.target.value === "The Tale of the Princess Kaguya") {
    filterf(dataFilms, "The Tale of the Princess Kaguya");
  } else if (e.target.value === "When Marnie Was There") {
    filterf(dataFilms, "When Marnie Was There");
  }
})

//filter
function filterf(data, condition) {
  const cardsMovies = document.querySelector('.characters');
  cardsMovies.innerHTML = '';
  data.filter(movie => {
    if (movie.title === condition) {
      const m = movie.people
      m.map(character => {
        const card = document.createElement('div');
        card.classList.add("card_char");
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
      })
    }
  })

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

// Ordenar
const order = document.querySelector("#sort");
order.addEventListener("change", () => {
  document.querySelector('.cards').innerHTML = '';
  const indexSelect = order.selectedIndex;
  if (indexSelect === 1) {
    const dataOrdered = dataFilmsSort(dataFilms);
    showMovies(dataOrdered);
  } else if (indexSelect === 2) {
    const dataReverse = dataFilmsReverse(dataFilms);
    showMovies(dataReverse);
  }
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
  data.forEach((movie) => {
    const card = document.createElement('div')
    card.classList.add("card")
    card.innerHTML =
      `
    <img id="${movie.title}" class="img-modal" src="${movie.poster}" alt="${movie.title}">
     <div class="info-card">
         <p class="info-title">${movie.title}</p>
         <p class="year">${movie.release_date}</p>
         <p class="year">${movie.director}</p>
     </div>
    `
    cardsMovies.appendChild(card);
    const element = document.getElementById(movie.title);
    element.addEventListener('click', function (e) {
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








export function filter(data, director){
  const filteredMovies = data.filter((movie)=>
    movie.director === director
  );
  return filteredMovies
}

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

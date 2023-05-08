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

//Ordenar películas A - Z
export function dataFilmsAZ(arr) {
  const arrResultAZ = arr.sort ((a,b)=> {
    const minusA = a.title.toLowerCase()
    const minusB = b.title.toLowerCase()
    return minusA.localeCompare(minusB)
  })
  return arrResultAZ
}

//Ordenar películas Z - A
export function dataFilmsReverse(arr) {
  const arrResult = arr.sort((a, b) => {
    if (b.title < a.title) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

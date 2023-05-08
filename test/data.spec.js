import { dataFilmsReverse, dataFilmsSort, filter, dataFilmsAZ } from '../src/data.js';

const entrada = [{ title: "Totoro" }, { title: "Ponyo" }, { title: "Mononoke" }, { title: "Totoro" }];
const salida = [{ title: "Mononoke" }, { title: "Ponyo" }, { title: "Totoro" }, { title: "Totoro" }];
const entradaReverse = [{title: "a"}, {title: "a"}, {title:"b"}, {title: "c"}];
const salidaReverse = [{title: "c"}, {title:"b"}, {title: "a"}, {title: "a"},];
const directoresEntrada = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
    "release_date": "1988",
    "rt_score": "97",
  }
];

//Test orden películas
describe("dataFilmsSort", () => {
  it('is function', () => {
    expect(typeof dataFilmsSort).toBe('function');
  })
});

describe("ordenAZ con localeCompare", () => {
  it("Ordena las peliculas de A-Z usando localeCompare", () => {
    expect(dataFilmsAZ(entrada)).toEqual(salida)
  })
});

describe("ordenAZ", () => {
  it("Ordena las peliculas de A-Z", () => {
    expect(dataFilmsSort(entrada)).toEqual(salida)
  })
});

describe("dataFilmsReverse", () => {
  it('is a function', () => {
    expect(typeof dataFilmsReverse).toBe('function');
  })
});

describe("ordenZA", () => {
  it("Ordena las peliculas de Z-A", () => {
    expect(dataFilmsReverse(entradaReverse)).toEqual(salidaReverse)
  })
});

//Test filter
describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  })
});

describe("FiltrarDirectores", () => {
  it("filtra las peliculas del director Hayao Miyazaki", () => {
    expect(filter(directoresEntrada,"Hayao Miyazaki")).toEqual([{
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
    }])
  })
})

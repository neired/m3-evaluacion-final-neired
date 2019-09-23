// const ENDPOINT = 'https://rickandmortyapi.com/api/character/?name=';
const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const getCharacters = (userInput) => {
  return fetch(ENDPOINT + userInput)
    .then(res=>res.json());
};

export {getCharacters};

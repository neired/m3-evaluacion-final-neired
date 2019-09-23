const ENDPOINT = 'https://rickandmortyapi.com/api/character/?name=';

const getCharacters = (userInput) => {
  return fetch(ENDPOINT + userInput)
    .then(res=>res.json());
};

export {getCharacters};

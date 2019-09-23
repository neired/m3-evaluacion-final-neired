import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
  const { characters, userInput } = this.props;
  return(
    <ol className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .map(character => {
          return (
            <li className="character-item" key={character.id} id={character.id}>
              <CharacterCard 
                name={character.name} 
                species={character.species} 
                image={character.image} 
              />
            </li>
          )})
      }
    </ol>
  )}
}

export default CharacterList;
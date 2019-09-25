import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component {
  render() {
  const { characters, userInput, selectedGender } = this.props;
  return(
    <ol className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .filter(character => {
          if (selectedGender === 'All') {
            return true;
          } else {
            if (selectedGender === 'Male') {
              return character.gender === 'Male';
            } else if (selectedGender === 'Female') {
              return character.gender === 'Female'
            } else {
              return character.gender === 'unknown'
            }
          }
        })
        .map(character => {
          return (
            <li className="character-item" key={character.id} id={character.id}>
              <Link to={`/character-detail/${character.id}`} className="character-link">
              <CharacterCard 
                name={character.name} 
                species={character.species} 
                image={character.image} 
              />
              </Link>
            </li>
          )})
      }
    </ol>
  )}
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired,
  selectedGender: PropTypes.string.isRequired
};

export default CharacterList;
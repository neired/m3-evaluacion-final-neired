import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component {
  render() {
  const { characters, userInput, selectedEpisodes } = this.props;
  return(
    <ol className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase()
        .includes(userInput.toUpperCase()))
        .filter(character => {
          if (selectedEpisodes === 'all') {
            return character;
          } else {
            if (selectedEpisodes === 'punctual') {
              return character.episode.length < 5;
            } else if (selectedEpisodes === 'regular') {
              return (character.episode.length > 6 && character.episode.length < 25);
            } else {
              return character.episode.length > 30;
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
  userInput: PropTypes.string.isRequired
};

export default CharacterList;
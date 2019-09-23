import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  const {routerProps, characters} = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const character = characters.filter(item => item.id === characterId);

  if (character[0]) {
  const {name, image, status, species, origin, episode} = character[0];
    return (
      <React.Fragment>
        <Link to="/" className="app__back">Volver</Link>
        <div className="character-detail__container">
          <img className="character-img" src={image} alt={name}></img>
          <div>
            <h2>{name}</h2>
            <ul>
              <li>Status: {status}</li>
              <li>Species: {species}</li>
              <li>Origin: {origin.name}</li>
              <li>Episodes: {episode.length}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
        <p>Error: Character not found</p>
    );
  }
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.object,
  episode: PropTypes.array
};

export default CharacterDetail;
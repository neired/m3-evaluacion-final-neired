import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterDetail.scss';

const CharacterDetail = props => {
  const {routerProps, characters} = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const character = characters.filter(item => item.id === characterId);

  if (character[0]) {
  const {name, image, status, species, origin, episode} = character[0];
    return (
      <div className="char-detail__main-container">
        <Link to="/" className="app__back">Volver</Link>
        <div className="char-detail__container">
          <div className="char-detail__img-container"><img className="character-img" src={image} alt={name}></img></div>
          <div>
            <h2>{name}</h2>
            <ul className="char-detail__list">
              <li>Status: {status}</li>
              <li>Species: {species}</li>
              <li>Origin: {origin.name}</li>
              <li>Episodes: {episode.length}</li>
            </ul>
          </div>
        </div>
      </div>
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
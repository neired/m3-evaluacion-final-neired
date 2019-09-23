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
        <Link to="/" className="app__back"><i className="fas fa-long-arrow-alt-left"></i> Volver</Link>
        <div className="char-detail__container">
          <div className="char-detail__img-container"><img className="char-img" src={image} alt={name}></img></div>
          <div className="char-detail__data-container">
            <h2 className="char-detail__h2">{name}</h2>
              <p>{(status !== 'Dead') ? <i className="fas fa-heart"></i> : <i className="fas fa-skull-crossbones"></i>} · {(species === 'Human') ? <i className="fas fa-male"></i> : <i className="fab fa-reddit-apen"></i>}</p>
              <p className="char-detail__p"><b>Origin:</b> {origin.name}</p>
              <p className="char-detail__p"><b>Episodes:</b> {episode.length}</p>
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
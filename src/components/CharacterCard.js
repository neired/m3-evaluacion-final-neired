import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    const { name, image, species } = this.props;
    return (
      <>
        <img className="character-img" src={image} alt={name}></img>
        <div className="character-info__container">
          <h2 className="character-name">{name}</h2>
          <div className="character-species">{(species === 'Human') ? <i className="fas fa-male"></i> : <i className="fab fa-reddit-alien"></i>}</div>
        </div>
      </>
    )
  }
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterCard;
import React from 'react';

class CharacterCard extends React.Component {
  render() {
    const { name, image, species } = this.props;
    return (
      <>
        <img className="character-img" src={image} alt={name}></img>
        <div className="character-info__container">
          <p className="character-name">{name}</p>
          <p className="character-species">{species}</p>
        </div>
      </>
    )
  }
}

export default CharacterCard;
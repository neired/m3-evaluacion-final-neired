import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
    render() {
    const { handleSelection, characters } = this.props;
    const characterrs = characters.id;
    characterrs.reduce((unique, character) => {
        return unique.includes(character) ? unique : [...unique, character],
    }, []);
    console.log(characterrs);
    // const locations = new Set(characters.location.name);
    // const locArr = [...locations];
    // console.log(locations);
    return (
      <div className="search-container">
        <label className="search-label"></label>
        <select onChange={handleSelection}>
            {characters.map(character => {
                return (
                    <option key={character.id} value={character.location.name}>{character.location.name}</option>
                )
            })}
          
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Select;

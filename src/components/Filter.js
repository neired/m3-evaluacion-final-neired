import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
  render() {
    const { getUserInput, userInput, handleSelect, selectedGender } = this.props;
    return (
      <div className="search-container">
        <label className="search-label"></label>
        <input
          type="text"
          onChange={getUserInput}
          value={userInput}
          className="search-input"
        ></input>
        <label>
          <select onChange={handleSelect} value={selectedGender}>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selectedGender: PropTypes.string.isRequired
};

export default Filter;

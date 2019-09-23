import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { getUserInput, userInput } = this.props;
    return (
      <div className="search-container">
        <label className="search-label"></label>
        <input type="text" onChange={getUserInput} value={userInput} className="search-input"></input>
      </div>
    )
  }
}

Filter.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired
};

export default Filter;
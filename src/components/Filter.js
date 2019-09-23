import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { getUserInput, userInput } = this.props;
    return (
      <>
      <label>Busca a un personaje:</label>
      <input type="text" onChange={getUserInput} value={userInput}></input>
      </>
    )
  }
}

Filter.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired
};

export default Filter;
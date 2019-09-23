import React from 'react';

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

export default Filter;
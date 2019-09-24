import React from 'react';
import './../stylesheets/Radio.scss';
// import PropTypes from 'prop-types';

class Radio extends React.Component {
  render() {
    const { handleRadioChange } = this.props;
    return (
      <div className="search-container__radio">
        <label className="search-label"></label>
        <input type="radio" name="gender" value="all" onChange={handleRadioChange}></input>All
        <input type="radio" name="gender" value="male" onChange={handleRadioChange}></input>Male
        <input type="radio" name="gender" value="female" onChange={handleRadioChange}></input>Female
        <input type="radio" name="gender" value="unknown" onChange={handleRadioChange}></input>Unknown
      </div>
    )
  }
}
export default Radio;
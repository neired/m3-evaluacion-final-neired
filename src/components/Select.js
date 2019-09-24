import React from "react";
// import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handleOptionChange } = this.props;
    return (
      <div className="search-container__radio">
        <select name="episodes-amount" form="carform" onChange={handleOptionChange}>
          <option value="all">All</option>
          <option value="punctual">{`Punctual character (1-2 epi)`}</option>
          <option value="regular" >{`Regular character (20-25 epi)`}</option>
          <option value="main" >{`Main character (>30 epi)`}</option>
        </select>
      </div>
    );
  }
}
export default Select;

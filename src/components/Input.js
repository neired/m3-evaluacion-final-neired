import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
    render() {
    const { getInputLocation, inputLocation } = this.props;
    return (
      <div className="search-container">
        <label className="search-label">Enter a location:</label>
        <input type="text" value={inputLocation} onChange={getInputLocation}>          
        </input>
      </div>
    );
  }
}

Input.propTypes = {
  getInputLocation: PropTypes.func.isRequired,
  inputLocation: PropTypes.string.isRequired
};

export default Input;

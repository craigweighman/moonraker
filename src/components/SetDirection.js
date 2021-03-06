import React, { Component } from "react";
import "../style/SetDirection.css";

class SetDirection extends Component {
  render() {
    const { num, selectedOption, optionChange } = this.props;
    return (
      <div className="set-button">
        <label>
          <input
            type="radio"
            value={num}
            // eslint-disable-next-line
            checked={selectedOption == num}
            onClick={optionChange}
          />
        </label>
      </div>
    );
  }
}

export default SetDirection;

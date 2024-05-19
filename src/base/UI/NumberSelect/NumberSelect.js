import React, { useState } from "react";
import "./number_select.css";
class NumberSelect extends React.Component {
  state = { number: 0 };

  printOption() {
    let result = [];
    this.props.value.forEach((element) =>
      result.push(<option>{element}</option>)
    );
    return result;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  constructor(props) {
    super(props);
    this.state = { number: 0, select: this.props.value[0] };
  }

  render() {
    return (
      <div className="input_double">
        <input
          className="input"
          type="number"
          name="number"
          min={0}
          value={this.state.number}
          onChange={this.handleChange}
        />
        <select
          className="input"
          name="select"
          id=""
          onChange={this.handleChange}
        >
          {this.printOption()}
        </select>
      </div>
    );
  }
}

export default NumberSelect;

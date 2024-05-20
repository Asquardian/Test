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

  async handleInputChange (event) {
    await this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
    this.props.onChange(this.state, this.props.name);
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
          onChange={(event) => this.handleInputChange(event)}
          required
        />
        <select
          className="input"
          name="select"
          id=""
          onChange={(event) => this.handleInputChange(event)}
        >
          {this.printOption()}
        </select>
      </div>
    );
  }
}

export default NumberSelect;

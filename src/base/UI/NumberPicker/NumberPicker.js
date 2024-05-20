import React from "react";
import "./number_picker.css";
import Minus from './minus.svg';
import Plus from './plus.svg';

class NumberPicker extends React.Component {
  state = { value: 0 };

  async control(number) {
    if (Number(this.state.value) + Number(number) < 0) {
      return 0;
    }
    if (Number(this.state.value) + Number(number) > this.props.max) {
      return this.props.max;
    }
    await this.setState({ value: Number(this.state.value) + Number(number) });
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="number_control">
        <button
          className="minus"
          type="button"
          onClick={() => this.control(-this.props.step)}
        >
          <img src={Minus} alt="" />
        </button>
        <div className="output">{this.state.value}</div>
        <button
          className="control"
          type="button"
          onClick={() => this.control(this.props.step)}
        >
        <img src={Plus} alt="" />
        </button>
      </div>
    );
  }
}

export default NumberPicker;

import React from "react";
import "./number_picker.css";

class NumberPicker extends React.Component {
  state = { value: 0 };

  async control(number) {
    if(Number(this.state.value) + Number(number) < 0){
        return 0;
    }
    if(Number(this.state.value) + Number(number) > this.props.max){
      return this.props.max;
    }
    await this.setState({value: Number(this.state.value) + Number(number)});
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="number_control">
        <button className="control" type="button" onClick={() => this.control(this.props.step)}>
          +
        </button>
        <div className="output">
          {this.state.value}
        </div>
        <button className="minus" type="button" onClick={() => this.control(-this.props.step)}>
          -
        </button>
      </div>
    );
  }
}

export default NumberPicker;

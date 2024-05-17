import React from "react";
import "./arrow.css";
import Arrow from "./arrow.svg";

class HideArrow extends React.Component {
    
  state = { buttonClicked: false };

  buttonClick() {
    if (this.state.buttonClicked) {
      this.setState({ buttonClicked: false });
    } else {
      this.setState({ buttonClicked: true });
    }
    this.props.handleEvent(this.state.buttonClicked);
  }

  render() {
    return (
      <button
        onClick={() => this.buttonClick()}
        className={
          this.state.buttonClicked ? "arrow_button active" : "arrow_button"
        }
        aria-label="Открыть"
      >
        <img src={Arrow} alt="Открыть" />
      </button>
    );
  }
}

export default HideArrow;

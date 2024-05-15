import React from "react";
import "./progress.css";

class Progress extends React.Component {
  render() {
    return (
      <div className="progress_bar">
        <div
          className="progress"
          style={{ width: this.props.value + "%" }}
        ></div>
      </div>
    );
  }
}

export default Progress;

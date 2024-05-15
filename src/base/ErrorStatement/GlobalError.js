import React from "react";
import "./error.css";

class GlobalError extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>{this.props.text}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default GlobalError;

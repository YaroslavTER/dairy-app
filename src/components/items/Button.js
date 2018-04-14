import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={"btn btn-primary items-button " + this.props.buttonStyle}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

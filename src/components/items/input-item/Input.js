import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="items-input">
        <input
          type="input"
          className="form-control"
          placeholder={this.props.placeholder}
          vlaue={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

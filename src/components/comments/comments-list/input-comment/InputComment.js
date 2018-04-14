import React, { Component } from "react";

export class InputComment extends Component {
  render() {
    return (
      <div className="input-comment">
        <div className="comments-input-img inline" />
        <div className="mb-3 ml-3 inline">
          <textarea
            className="form-control input-text"
            value={this.props.text}
            onInput={this.props.onTextChange}
            onKeyDown={this.props.onKeyDown}
            rows="3"
          />
        </div>
      </div>
    );
  }
}

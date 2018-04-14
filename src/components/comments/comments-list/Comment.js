import React, { Component } from "react";

export class Comment extends Component {
  render() {
    let imgClass =
      this.props.index % 2 === 0 ? "comments-even-img" : "comments-odd-img";
    return (
      <div>
        <div className="comment">
          <div className={imgClass} />
          <div className="comments-text">{this.props.text}</div>
        </div>
        <hr />
      </div>
    );
  }
}

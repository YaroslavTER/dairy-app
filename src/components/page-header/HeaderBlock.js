import React, { Component } from "react";

export class HeaderBlock extends Component {
  render() {
    return (
      <div className="container header-block">
        <div className="app-info">
          <div className="name">{this.props.name}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from "../Button";

export class Item extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSelectItemClick = this.handleSelectItemClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.index);
  }

  handleSelectItemClick() {
    this.props.onSelectItemClick(this.props.index);
  }

  renderNumberOfComments(numberOfComments) {
    let layout = null;
    if (numberOfComments > 0) {
      layout = (
        <span className="badge badge-pill badge-primary">
          {numberOfComments}
        </span>
      );
    }
    return layout;
  }

  render() {
    let highlightClass = "";
    if (this.props.isSelected) {
      highlightClass += " highlight-red";
    }
    return (
      <div>
        <div className="item">
          <Button
            name="Delete"
            buttonStyle="btn-outline-danger"
            onClick={this.handleDeleteClick}
          />
          <div className={highlightClass}>
            <button
              className="clickable-item"
              type="submit"
              onClick={this.handleSelectItemClick}
            >
              <div className="items-name">
                {this.props.name}
                {this.renderNumberOfComments(this.props.numberOfComments)}
              </div>
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

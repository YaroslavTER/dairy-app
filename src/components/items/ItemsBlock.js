import React, { Component } from "react";
import { InputItem } from "./input-item/InputItem";
import { ItemList } from "./item-list/ItemList";

export class ItemsBlock extends Component {
  render() {
    return (
      <div className="container items-block mt-5 mb-2 inline">
        <div className="header">{this.props.headerName}</div>
        <InputItem
          onClick={this.props.onAddClick}
          onChange={this.props.onChange}
          value={this.props.name}
          placeholder="Type name here..."
        />
        <ItemList
          itemList={this.props.itemList}
          onDeleteClick={this.props.onDeleteClick}
          onSelectItemClick={this.props.onSelectItemClick}
        />
      </div>
    );
  }
}

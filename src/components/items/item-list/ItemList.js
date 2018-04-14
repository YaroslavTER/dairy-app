import React, { Component } from "react";
import { Item } from "./Item";

export class ItemList extends Component {
  fillList(itemList) {
    if (itemList !== null) {
      let list = itemList.map((item, i) => {
        return (
          <Item
            name={item.name}
            key={i + item.name}
            index={i}
            onDeleteClick={this.props.onDeleteClick}
            onSelectItemClick={this.props.onSelectItemClick}
            isSelected={item.isSelected}
            numberOfComments={item.comments.length}
          />
        );
      });

      return list;
    }
    return null;
  }

  render() {
    return (
      <div className="item-list mt-3">{this.fillList(this.props.itemList)}</div>
    );
  }
}

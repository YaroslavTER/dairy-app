import React, { Component } from "react";
import "./styles/App.css";
import { HeaderBlock } from "./components/page-header/HeaderBlock";
import { ItemsBlock } from "./components/items/ItemsBlock";
import { CommentsBlock } from "./components/comments/CommentsBlock";

class App extends Component {
  constructor() {
    super();

    let itemList = JSON.parse(localStorage.getItem("itemList"));

    let array = [
      {
        name: "First item with custom name",
        isSelected: false,
        comments: [{ text: "qwerty" }, { text: "qwerty asdfgh" }]
      },
      {
        name: "Second item is active",
        isSelected: false,
        comments: [{ text: "qwerty asdfgh" }]
      }
    ];

    if (itemList !== null) {
      itemList = this.resetIsSelected(itemList);
    }

    this.state = {
      name: "",
      text: "",
      itemList: itemList !== null ? itemList : array,
      lastIndex: -1
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSelectItemClick = this.handleSelectItemClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  resetIsSelected(array) {
    let resetedArray = array.map(element => {
      element.isSelected = false;
      return element;
    });
    return resetedArray;
  }

  handleAddClick() {
    let length = this.state.itemList.length;
    if (
      length > 0 &&
      this.state.name !== "" &&
      this.state.name !== this.state.itemList[length - 1].name
    ) {
      this.setState({
        itemList: [
          ...this.state.itemList,
          {
            name: this.state.name,
            isSelected: false,
            comments: []
          }
        ]
      });
    } else if (length === 0) {
      this.setState({
        itemList: [
          {
            name: this.state.name,
            isSelected: false,
            comments: []
          }
        ]
      });
    }
    localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
  }

  handleDeleteClick(index) {
    let array = this.state.itemList;
    if (index > -1) {
      array.splice(index, 1);
    }
    let resetedArray = this.resetIsSelected(array);
    this.setState({
      itemList: [].concat(resetedArray)
    });
    localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
  }

  handleSelectItemClick(index) {
    let array = this.state.itemList;
    array[index].isSelected = array[index].isSelected ? false : true;
    if (
      this.state.lastIndex !== -1 &&
      index !== this.state.lastIndex &&
      array[this.state.lastIndex] !== undefined
    ) {
      array[this.state.lastIndex].isSelected = false;
    }

    this.setState({
      itemList: [].concat(array),
      lastIndex: index
    });
    localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  onKeyDown(event) {
    if (event.ctrlKey && event.keyCode === 13) {
      this.addComment(this.state.text);
    }
  }

  addComment(text) {
    if (this.state.lastIndex !== -1) {
      let array = this.state.itemList;
      let lastSelectedItem = array[this.state.lastIndex];
      let commentsLength = lastSelectedItem.comments.length;
      if (
        (lastSelectedItem.comments[commentsLength - 1] === undefined ||
          lastSelectedItem.comments[commentsLength - 1].text !== text) &&
        text !== ""
      ) {
        lastSelectedItem.comments.push({ text: text });
      }
      this.setState({ itemList: array });
    }
    localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
  }

  componentDidMount() {}

  render() {
    let commentsList =
      this.state.lastIndex !== -1 &&
      this.state.itemList[this.state.lastIndex] !== undefined
        ? this.state.itemList[this.state.lastIndex].comments
        : { comments: [] };
    let commentsBlock = null;
    if (this.state.itemList[this.state.lastIndex] === undefined) {
      commentsBlock = null;
    } else if (
      this.state.lastIndex !== -1 &&
      this.state.itemList[this.state.lastIndex].isSelected
    ) {
      commentsBlock = (
        <CommentsBlock
          name="Comments"
          index={this.state.lastIndex}
          commentsList={commentsList}
          onTextChange={this.handleTextChange}
          text={this.state.text}
          onKeyDown={this.onKeyDown}
        />
      );
    }
    return (
      <div>
        <HeaderBlock name="dairy app" description="Comment with no sense" />
        <ItemsBlock
          headerName="Items"
          name={this.state.name}
          onChange={this.handleChange}
          itemList={this.state.itemList}
          onAddClick={this.handleAddClick}
          onDeleteClick={this.handleDeleteClick}
          onSelectItemClick={this.handleSelectItemClick}
        />
        {commentsBlock}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { CommentsList } from "./comments-list/CommentsList";
import { InputComment } from "./comments-list/input-comment/InputComment";

export class CommentsBlock extends Component {
  render() {
    return (
      <div className="container comments mt-5 mb-5 inline">
        <div className="header">
          {this.props.name} #{this.props.index + 1}
        </div>
        <CommentsList commentsList={this.props.commentsList} />

        <InputComment
          onTextChange={this.props.onTextChange}
          text={this.props.text}
          onKeyDown={this.props.onKeyDown}
        />
      </div>
    );
  }
}

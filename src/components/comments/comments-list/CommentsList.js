import React, { Component } from "react";
import { Comment } from "./Comment";

export class CommentsList extends Component {
  fillComments(commentsList) {
    if (commentsList.length > 0) {
      let list = commentsList.map((comment, i) => {
        return <Comment key={i} index={i} text={comment.text} />;
      });
      return list;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="comments-list">
        {this.fillComments(this.props.commentsList)}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from "../Button";
import { Input } from "./Input";

export class InputItem extends Component {
  render() {
    return (
      <div className="mt-3">
        <Button
          name="Add new"
          buttonStyle="add-button"
          onClick={this.props.onClick}
        />
        <Input
          plaseholder={this.props.plaseholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../App.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      isSelected: false,
    };
  }

  render() {
    return this.state.isSelected ? (
      <div id={this.state.id} className="CategoryItem Active">
        {this.state.title}
      </div>
    ) : (
      <div id={this.state.id} className="CategoryItem ">
        {this.state.title}
      </div>
    );
  }
}

export default Filter;

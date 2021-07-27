import React, { Component } from "react";
import "../../App.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      curSelected: props.selected,
      updateFilter: props.updateFilter,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (this.state.curSelected !== nextProps.selected) {
      this.setState({ curSelected: nextProps.selected });
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.state.curSelected === this.state.title ? (
      <div
        onClick={this.state.updateFilter}
        id={this.state.id}
        className="CategoryItem Active"
      >
        {this.state.title}
      </div>
    ) : (
      <div
        onClick={this.state.updateFilter}
        id={this.state.id}
        className="CategoryItem "
      >
        {this.state.title}
      </div>
    );
  }
}

export default Filter;

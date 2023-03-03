import React, { Component } from "react";

export default class Searchbox extends Component {
  render() {
    return (
      <div>
        <input
          className={`monsters-search-box ${this.props.className}`}
          type="search"
          placeholder="search monsters"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

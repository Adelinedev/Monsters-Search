import React, { Component } from "react";

export default class Cardlist extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <div className={this.props.className}>
        {filteredMonsters.map((monsterItem) => (
          <div key={monsterItem.id} className="card-container">
            <img
              alt={`monster: ${monsterItem.name} `}
              src={`https://robohash.org/${monsterItem.id}set=set2`}
            ></img>
            <h2>{monsterItem.name}</h2>
            <p>{monsterItem.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

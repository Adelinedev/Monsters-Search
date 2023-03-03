// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">hello baobao</header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import Cardlist from "../Cardlist";
import Searchbox from "../Searchbox";
import "../../App.css";

export default class App extends Component {
  state = {
    monsters: [],
    inputValue: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => ({
            monsters: users,
          }),
          console.log(this.state)
        );
      });
  }
  // initialing the onSearchChange function just when we initialing render, so we won't rerender again and again when we click the button to call the function
  onSearchChange = (event) => {
    const lowercaseInputValue = event.target.value.toLowerCase();

    this.setState({ inputValue: lowercaseInputValue });
  };

  render() {
    // destructuring method
    const { monsters, inputValue } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monsterItem) =>
      monsterItem.name.toLowerCase().includes(inputValue)
    );
    return (
      <div>
        <Searchbox className="search-box" onSearchChange={onSearchChange} />

        <Cardlist className="card-list" filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

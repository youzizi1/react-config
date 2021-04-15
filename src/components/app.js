import React, { Component } from "react";
import { double } from "@/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  handleClick() {
    this.setState({
      count: double(this.state.count),
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>double</button>
      </div>
    );
  }
}

export default App;

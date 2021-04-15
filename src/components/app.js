import React, { Component } from "react";
import { double } from "@/utils";
import "@/css/app.css";
import avatar from "@/images/avatar.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  handleDoubleCount() {
    this.setState({
      count: double(this.state.count),
    });
  }

  handleAsyncLoad() {
    import("@/utils/async-module").then((module) => {
      console.log(module.default);
    });
  }

  render() {
    return (
      <div className="app">
        <p>{this.state.count}</p>
        <button onClick={this.handleDoubleCount.bind(this)}>double</button>
        <img src={avatar} />
        <button onClick={this.handleAsyncLoad.bind(this)}>load</button>
      </div>
    );
  }
}

export default App;

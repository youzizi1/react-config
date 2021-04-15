import React, { Component } from "react";
import { double } from "@/utils";
import '@/css/app.css'
import avatar from '@/images/avatar.jpg'

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
      <div className="app">
        <p>{this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>double</button>
        <img src={avatar} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  render() { 
    return ( <div>{this.state.count}</div> );
  }
}

export default App;
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 2
    }
  }
  render() { 
    return ( <div>{this.state.count}
      <input type="text" />
    </div> );
  }
}

export default App;
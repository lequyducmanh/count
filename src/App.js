import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const initialCount = {count : 0};
// var count  = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }

  resetState () {
    this.setState ({
      count : 0
    })
  }

  nextCount(){
    this.setState((state) => {
      console.log(state);
      return {count: state.count + 1};
    });
  }
  prevCount(){
    this.setState((state) => {
      if(state.count === 0){
        return state.count = 0;
      }
      else{
        return {count: state.count - 1};
      }
    });
  }

 


  
  render() {
    const {count} = this.state
    return (
      <div className="App">
        <header className="App-header">
          Count: {count}
          <button onClick={() => this.resetState()}>Reset</button>
          <button onClick={() => this.nextCount()}>+</button>
          <button onClick={() => this.prevCount()}>-</button>
        </header>
      </div>
    );
  }
}

export default App;

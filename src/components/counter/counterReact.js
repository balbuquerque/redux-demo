import React from 'react';

class CounterReact extends React.Component {  
  state = {
    counter: 0
  }
  
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    )
  } 
}


export default CounterReact;
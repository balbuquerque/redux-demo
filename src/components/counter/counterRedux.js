import React from 'react';
import Display from './display';
import { connect } from "react-redux";
import { increment, decrement, coisaEstranha } from '../../actions/counter';

class CounterRedux extends React.Component {  
  render() {
    return (
      <div>
        <Display/>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>

        <button onClick={this.props.coisaEstranha}>coisa Estranha</button>
      </div>
    )
  } 
}

const mapDispatchToProps = {
  increment,
  decrement,
  coisaEstranha
}

export default connect(null, mapDispatchToProps)(CounterRedux);
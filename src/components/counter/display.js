import React from 'react';
import { connect } from 'react-redux'

class Display extends React.Component {  
  
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps, null)(Display);
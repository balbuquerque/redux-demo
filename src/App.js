import React from 'react';
import Counter from './components/counter/counterReact';
import CounterRedux from './components/counter/counterRedux';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Counter /> */}
     <CounterRedux/>
    </div>
  );
}

export default App;

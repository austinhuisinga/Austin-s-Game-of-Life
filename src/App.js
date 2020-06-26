import React from 'react';
import './App.css';
import GridContainer from './components/GridContainer'
import Rules from './components/Rules'

function App() {
  return (
    <div className="App">
      <h1>Austin's Conway's Game of Life</h1>
      <GridContainer /> 
      <Rules />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestCompornent from './TestCompornent';



const  App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestCompornent text="hello from App"/>
      </header>
    </div>
  );
}

export default App;

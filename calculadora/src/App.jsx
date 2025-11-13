import React from 'react';
import Calculator from './components/Calculator';
import Clock from './components/Clock'; // novo import
import './index.css';

function App() {
  return (
    <div className="app">
      <Clock />
      <Calculator />
      <p>Developed by Layo</p>
    </div>
  );
}

export default App;

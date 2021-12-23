import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Login, Home, Setting} from './components'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

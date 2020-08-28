import React from 'react';
import Header from './components/header/Header.js'; 
import Home from './components/home/Home.js';

import './App.css';

function App() {
  return (
    <div className="app">
        <Header />

        {/* Banner */}
        <Home />

    </div>
  );
}

export default App;

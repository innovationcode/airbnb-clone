import React from 'react';
import Header from './components/header/Header.js'; 
import Home from './components/home/Home.js';
import Footer from './components/footer/Footer.js'

import './App.css';

function App() {
  return (
    <div className="app">
        <Header />

        {/* Banner */}
        <Home />

        <Footer />
    </div>
  );
}

export default App;

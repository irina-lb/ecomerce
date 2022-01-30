import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

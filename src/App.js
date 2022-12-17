import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />

        </Routes>
      </div>
    </>
  );
}

export default App;

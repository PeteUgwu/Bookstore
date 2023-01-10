import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { fetchBooks } from './redux/books/books';

// components
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchBooks());
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

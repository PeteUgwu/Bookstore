import React from 'react';
import { useSelector } from 'react-redux';
import Bookform from './Bookform';
import BookItem from './BookItem';

// StyleSheet
import './Books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books-container">
      {
        books.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))
      }
      <hr />
      <Bookform />
    </div>
  );
};

export default Books;

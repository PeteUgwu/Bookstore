import React from 'react';
import { useSelector } from 'react-redux';
import Bookform from './Bookform';
import BookItem from './BookItem';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="App">
      {
        books.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))
      }
      <Bookform />
    </div>
  );
};

export default Books;

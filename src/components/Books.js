import React from 'react';
import Bookform from './Bookform';
import BookItem from './BookItem';

const Books = () => {
  const data = [
    {
      title: 'Code like a novice',
      author: 'Peter',
      index: 1,
    },
    {
      title: 'Love and hate',
      author: 'Zintee Ihe',
      index: 2,
    },
  ];
  return (
    <div className="App">
      {
        data.map((book) => (
          <BookItem
            key={book.index}
            book={book}
          />
        ))
      }
      <Bookform />
    </div>
  );
};

export default Books;

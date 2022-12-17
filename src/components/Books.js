import React from 'react';
import Bookform from './Bookform';

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
        data.map((item) => (
          <div key={item.index}>
            <h2>
              {item.title}
            </h2>
            <h2>
              {item.author}
            </h2>
          </div>
        ))
       }
      <Bookform />
    </div>
  );
};

export default Books;

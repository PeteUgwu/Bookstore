import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Bookform() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const setValue = (ev) => {
    const { value } = ev.target;
    if (ev.target.name === 'title') {
      setFormData({
        ...formData,
        title: value,
      });
    } else {
      setFormData({
        ...formData,
        author: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      const newBook = { ...formData, id: uuidv4() };
      dispatch(addBook(newBook));
      setFormData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add book name..." name="title" value={formData.title} onChange={setValue} />
        <input type="text" placeholder="Add Author's name..." name="author" value={formData.author} onChange={setValue} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Bookform;

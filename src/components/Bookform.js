import React, { useState } from 'react';

function Bookform() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });
  const setValue = (ev) => {
    const { value } = ev.target;
    setFormData({
      name: value,
    });
  };
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add book name..." name="title" value={formData.title} onChange={setValue} />
        <input type="text" placeholder="Add Author's name..." name="author" value={formData.author} onChange={setValue} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Bookform;

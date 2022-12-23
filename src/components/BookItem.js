import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line camelcase
  const { title, author, item_id } = book;
  return (
    <>
      <div>
        <h2>
          {title}
        </h2>
        <h2>
          {author}
        </h2>
        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(item_id));
          }}
        >
          Remove

        </button>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;

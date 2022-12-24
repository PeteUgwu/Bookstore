import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

// stylesheet
import './BookItem.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line camelcase
  const { title, author, item_id } = book;
  return (
    <>
      <div className="book-item-container">
        <div className="title-section">
          <div>
            <span className="book-category">Nature</span>
            <h2 className="book-title">
              {title}
            </h2>
            <span className="book-author">
              {author}
            </span>
          </div>
          <div className="action-buttons">
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(id));
              }}
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-section">
            <div className="circular-progress" />
            <div>
              <h3 className="circular-progress-percent">65%</h3>
              <span className="progress-span">Completed</span>
            </div>
          </div>
          <div className="progress-section-divider" />
          <div className="current-chapter-section">
            <span className="cur-chapter-title">CURRENT CHAPTER</span>
            <h4 className="cur-chapter">Chapter 10</h4>
            <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;

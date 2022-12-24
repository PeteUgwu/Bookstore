import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

// stylesheet
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <div className="categories-container">
        <div>
          <span className="category-status">{categories}</span>
        </div>
        <button
          className="status-btn"
          type="button"
          onClick={() => {
            dispatch(checkStatus());
          }}
        >
          Check Status
        </button>
      </div>
    </>
  );
};

export default Categories;

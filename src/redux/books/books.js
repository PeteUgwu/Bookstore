// action types
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state;
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
}

// action creator
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

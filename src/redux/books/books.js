// action types
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// reducer
const initialState = [
  {
    title: 'Christmas',
    author: 'Peter',
    id: 1,
  },
  {
    title: 'New Year',
    author: 'Valentine',
    id: 2,
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
}

// action creator
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

// action type
const CHECK_STATUS = 'categories/categories/CHECK_STATUS';

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// action creator
export const checkStatus = () => ({ type: CHECK_STATUS });

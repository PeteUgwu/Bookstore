/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import processData from '../utils';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cfAsmp8kmF3RLjcv30GC/books';

// action types
const FETCH_BOOKS = 'books/books/FETCH_BOOKS';
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${REMOVE_BOOK}/fulfilled`:
      return [
        ...state.filter((item) => item.item_id !== action.payload),
      ];
    case `${FETCH_BOOKS}/fulfilled`:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}

// action creator
export const addBook = createAsyncThunk(ADD_BOOK,
  async (payload) => {
    await axios.post(BASE_URL, payload);
    return payload;
  });

export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (item_id) => {
    await axios.delete(`${BASE_URL}/${item_id}`);
    return item_id;
  });

export const fetchBooks = createAsyncThunk(FETCH_BOOKS,
  async () => {
    const response = await axios.get(BASE_URL);
    const payload = processData(response?.data);
    return payload;
  });

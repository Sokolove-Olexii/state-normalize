import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import * as bookShelfAPI from "services/bookshelf-api";

import { bookEntity, bookListEntity } from "redux/schemas/schemas";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      const normalizedData = normalize(books, bookListEntity);
      return normalizedData.entities;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchBooksByAuthor = createAsyncThunk(
  "books/fetchBooksByAuthor",
  async (authorId) => {
    const books = await bookShelfAPI.fetchBooksByAuthor(authorId);
    return books;
  },
);

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (bookId) => {
    const book = await bookShelfAPI.fetchBookById(bookId);
    const normalizedData = normalize(book, bookEntity);
    return normalizedData.entities;
  },
);

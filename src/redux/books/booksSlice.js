import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import {
  fetchBooks,
  fetchBooksByAuthor,
  fetchBookById,
} from "./booksOperations";

const booksAdapter = createEntityAdapter({
  selectId: (book) => book.id,
});

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState({
    loading: false,
  }),
  extraReducers: {
    [fetchBooks.fulfilled](state, action) {
      if (action.payload.books) {
        booksAdapter.upsertMany(state, action.payload.books);
      }
    },
    [fetchBooksByAuthor.fulfilled](state, action) {
      booksAdapter.upsertMany(state, action.payload);
    },
    [fetchBookById.fulfilled](state, action) {
      if (action.payload.books) {
        booksAdapter.upsertMany(state, action.payload.books);
      }
    },
  },
});

const selectors = booksAdapter.getSelectors((state) => state.books);
selectors.getBooksByAuthor = createSelector(
  [selectors.selectAll, (_, authorId) => authorId],
  (allBooks, authorId) => allBooks.filter((book) => book.authorId === authorId),
);

export const booksSelectors = selectors;
export const booksReducer = booksSlice.reducer;

import { getBooksApi, getChaptersApi } from "../apis/books";

export const getBooks = (user) => (dispatch) => {
  return getBooksApi(user);
};

export const getChapters = (user, bookId) => (dispatch) => {
  return getChaptersApi(user, bookId);
};

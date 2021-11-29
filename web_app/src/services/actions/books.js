import { getBooksApi } from "../apis/books";

export const getBooks = (user) => (dispatch) => {
  return getBooksApi(user);
};

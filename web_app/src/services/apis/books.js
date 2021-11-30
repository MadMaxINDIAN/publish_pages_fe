import { get } from "../../utils/apiHelper";
import { base_url } from "../../utils/urls";

export const getBooksApi = (user) => {
  const url = `${base_url}/book`;
  return get(url, user);
};

export const getChaptersApi = (user, bookId) => {
  const url = `${base_url}/chapter/${bookId}`;
  return get(url, user);
};

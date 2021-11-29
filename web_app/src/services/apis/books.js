import { get } from "../../utils/apiHelper";
import { base_url } from "../../utils/urls";

export const getBooksApi = (user) => {
  const url = `${base_url}/book`;
  return get(url, user);
};

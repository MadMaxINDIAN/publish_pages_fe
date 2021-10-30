import { post, get } from "../../utils/apiHelper";
import { base_url } from "../../utils/urls";

export const registerUserApi = async (data) => {
    const url = `${base_url}/user/register`;
    return await post(url, {}, data);
}
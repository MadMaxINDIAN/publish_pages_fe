import axios from "axios";

export const post = (url, user, data=null, formdata=null) => {
    const headers = {
        'Authorization': user?.user?.stsTokenManager?.accessToken,
    };
    if (formdata) {
        headers["Content-Type"] = 'multipart/form-data';
    }
    if (data) {
        headers["Content-Type"] = 'application/json';
    }
    return axios.post(url, data, {headers: headers})
}

export const get = (url, user) => {
    const headers = {
        'Authorization': user?.user?.stsTokenManager?.accessToken,
    }
    return axios.get(url, {headers:  headers})
}
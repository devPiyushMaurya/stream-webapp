const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getUrl = (endpoint) => API_URL + endpoint;

export const get = (endpoint) => {
    return fetch(getUrl(endpoint));
};
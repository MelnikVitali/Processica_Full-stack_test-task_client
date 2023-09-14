const API_URL = (process.env.NODE_ENV === "production") ? process.env.REACT_APP_baseURL : process.env.REACT_APP_localURL;

export const APIUrls = {
    words: `${API_URL}/words`,
};


import axios from "axios";

const api = axios.create({
    baseURL: 'https://lyric.mackle.im/'
});

export default api
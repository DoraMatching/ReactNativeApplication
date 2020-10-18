import axios from 'axios';

const BASE_URL = "https://api.dev.doramatching.tk/";
const request = axios.create({
    baseURL: BASE_URL,
  });
  
  export default request;
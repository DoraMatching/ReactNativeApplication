import axios from "axios";
import Config from "react-native-config";
const BASE_URL = Config.BASE_URL;

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;

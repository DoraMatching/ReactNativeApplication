import request from "../helpers/request";
import Config from "react-native-config";


const loginFromAPI = ({ username, email, password }) => {
  console.log("login.api.js beginning");
  console.log("Base URL", Config.BASE_URL);
    return request.post('login', {
      username,
      email,
      password,
     }). then(res => {
        return res;
      }).catch(error => {
        return error.response.data;
      })
};

export {
    loginFromAPI,
}
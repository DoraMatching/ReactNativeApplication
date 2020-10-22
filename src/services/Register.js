import request from "../helpers/request";

const registerFromAPI = ({username, email, password}) => {
  console.log("register.api.js");
  return request
    .post("register", {
      username,
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {registerFromAPI};

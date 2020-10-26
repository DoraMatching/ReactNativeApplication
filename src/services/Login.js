import {authorize} from "react-native-app-auth";
import request from "../helpers/request";

const config = {
  redirectUrl: "com.myapp://oauthredirect",
  clientId: "7ec60ee9b1e0e9fee1a2",
  clientSecret: "6b91ea3f7286b575adb5491f5c1a721ed418a4ac",
  scopes: ["user", "repo"],
  serviceConfiguration: {
    authorizationEndpoint: "https://github.com/login/oauth/authorize",
    tokenEndpoint: "https://github.com/login/oauth/access_token",
    revocationEndpoint:
      "https://github.com/settings/connections/applications/7ec60ee9b1e0e9fee1a2",
  },
};

const loginFromAPI = ({username, email, password}) => {
  return request
    .post("login", {
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

const getGithubTokenAsync = () => {
  // Log in to get an authentication token
  return authorize(config);
};

const loginWithGithubFromAPI = (accessToken) => {
  return request
    .post("github", {
      accessToken,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {loginFromAPI, getGithubTokenAsync, loginWithGithubFromAPI};

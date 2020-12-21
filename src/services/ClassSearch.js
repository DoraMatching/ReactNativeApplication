import request from "../helpers/request";

const getDataFromAPI = ({url, token, key}) => {
  const params = {key};
  return request
    .get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {getDataFromAPI};

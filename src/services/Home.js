import request from "../helpers/request";

const getDataFromAPI = ({url, token}) => {
  return request
    .get(url,{
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {getDataFromAPI};

import request from "../helpers/request";

const getDataFromAPI = ({token, key, scope}) => {
 
  const params = {key, scope : JSON.stringify(scope)};
  //console.log("scope: ", scope);
  //console.log("getDataFromAPI: ", params);
  return request
    .get(`search`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      //console.log("error in request", error);
      return error.response.data;
    });
};

// , {
//   params,
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// }

export {getDataFromAPI};

import request from "../helpers/request";

const getDataFromAPI = ({token, key, scope}) => {
  const params = {key, scope};
 // console.log("getDataFromAPI: ", params);
  return request
    .get(`search?key=${key}&&scope=%5B%22USER%22%2C%22POST%22%2C%22QUESTION%22%5D`)
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

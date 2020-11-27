import request from "../helpers/request";

const getDataFromAPI = ({id, token, startTime, endTime, role}) => {
  const params = {startTime, endTime};
 // console.log("getDataFromAPI: ", params);
  return request
    .get(`${role}/${id}/lessons`, {
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



export {getDataFromAPI};

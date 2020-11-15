import request from "../helpers/request";



const patchUserFromAPI = ({id,token, ...params}) => {
  return request
    .patch(`user/${id}`, {
      ...params,
    },{
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

export {patchUserFromAPI};
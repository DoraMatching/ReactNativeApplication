import request from "../helpers/request";

const getDataFromAPI = ({url}) => {
  return request
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const deleteDataFromAPI = ({id, token}) => {
  return request
    .delete(`trainer/${id}`,{
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

const getIDFromAPI = ({id, token, role}) => {
  return request
    .get(`${role}?userId=${id}`,{
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
}



export {getDataFromAPI, deleteDataFromAPI, getIDFromAPI};

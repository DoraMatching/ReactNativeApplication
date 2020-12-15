import request from "../helpers/request";
const getTrainerFromAPI = ({id, token}) => {
    return request
      .get(`trainer/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
      .then((res) => {
        //console.log("ProfileAPI.js: ", res.data);
        return res;
      })
      .catch((error) => {
        return error.response.data;
      });
  };

 

  export {getTrainerFromAPI};
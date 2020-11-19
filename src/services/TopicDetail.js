import request from "../helpers/request";
const getTopicDetailFromAPI = ({id, token}) => {
    return request
      .get(`topic/${id}`,{
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

  
  export {getTopicDetailFromAPI};
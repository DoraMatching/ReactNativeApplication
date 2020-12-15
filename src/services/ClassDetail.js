import request from "../helpers/request";
const getClassDetailFromAPI = ({id, token}) => {
    return request
      .get(`classe/${id}`,{
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

  const getClassRegisterFromAPI = ({id, token}) => {
    return request
      .get(`classe/${id}/register`,{
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

  const getClassDeregisterFromAPI = ({id, token}) => {
    return request
      .get(`classe/${id}/deregister`,{
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
//   const getTopicClassFromAPI = ({url, token}) => {
//     return request
//       .get(url,{
//         headers: {
//           'Authorization': `Bearer ${token}` 
//         }
//       })
//       .then((res) => {
//         //console.log("ProfileAPI.js: ", res.data);
//         return res;
//       })
//       .catch((error) => {
//         return error.response.data;
//       });
//   };

  
  export {getClassDetailFromAPI, getClassRegisterFromAPI, getClassDeregisterFromAPI};
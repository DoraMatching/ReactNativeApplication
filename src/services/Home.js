import request from "../helpers/request";

const getBlogsFromAPI = ({url}) => {
    console.log("blogs.api.js params: ", params);
     return request.get(url)
        . then(res => {
          return res;
        }).catch(error => {
          return error.response.data;
        });
    };
  
    export {
        getBlogsFromAPI,
    }
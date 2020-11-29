import request from "../helpers/request";
const getUserFromAPI = ({id, token}) => {
    return request
      .get(`user/${id}`,{
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

  const getUserClassFromAPI = ({id, token}) => {
    return request
      .get(`trainee/${id}`,{
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

  const patchBlogCommentFromAPI = ({blogID, commentID, content, token}) => {
    return request
      .patch(`post/${blogID}/comment/${commentID}`, {
        content,
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

  export {getUserFromAPI, getUserClassFromAPI};
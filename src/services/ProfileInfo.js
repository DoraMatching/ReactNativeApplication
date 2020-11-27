import request from "../helpers/request";
const getUserClassroomFromAPI = ({id, token}) => {
    //console.log("getUserClassroomFromAPI", id, token);
    return request
      .get(`trainer/${id}/classes?page=1&limit=20&order=DESC`,{
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

  const getMoreUserClassroomFromAPI = ({url, token}) => {
    //console.log("getUserClassroomFromAPI", id, token);
    return request
      .get(url,{
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

  export {getUserClassroomFromAPI, getMoreUserClassroomFromAPI};
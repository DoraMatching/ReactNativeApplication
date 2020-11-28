import request from "../helpers/request";
const postBlogCommentFromAPI = ({id, content, token}) => {
    return request
      .post(`post/${id}/comment`, {
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

  const getBlogDetailFromAPI = ({id, token}) => {
    return request
      .get(`post/${id}`,{
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

  export {postBlogCommentFromAPI, patchBlogCommentFromAPI, getBlogDetailFromAPI};
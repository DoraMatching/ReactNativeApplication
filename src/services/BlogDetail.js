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

  export {postBlogCommentFromAPI};
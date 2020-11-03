import request from "../helpers/request";
const postQuestionCommentFromAPI = ({id, content, token}) => {
    return request
      .post(`question/${id}/comment`, {
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

  const patchQuestionCommentFromAPI = ({questionID, commentID, content, token}) => {
    return request
      .patch(`question/${questionID}/comment/${commentID}`, {
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

  export {postQuestionCommentFromAPI, patchQuestionCommentFromAPI};
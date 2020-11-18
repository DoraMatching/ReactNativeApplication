import request from "../helpers/request";

const postTagPredictionFromAPI = ({
  content
}) => {
  return request
    .post(
      `tag-predict?algorithm=tfidf`,
      {
        predict : content
      },
    )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};


export {postTagPredictionFromAPI};
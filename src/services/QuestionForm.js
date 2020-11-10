import request from "../helpers/request";

const postQuestionFromAPI = ({
  title,
  subTitle,
  featuredImage,
  content,
  tags,
  token,
}) => {
  return request
    .post(
      `question`,
      {
        title,
        content,
        tags,
        isDraft : true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export {postQuestionFromAPI};
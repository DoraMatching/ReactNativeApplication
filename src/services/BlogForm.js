import request from "../helpers/request";

const postBlogFromAPI = ({
  title,
  subTitle,
  featuredImage,
  content,
  tags,
  token,
}) => {
  return request
    .post(
      `post`,
      {
        title,
        subTitle,
        featuredImage,
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

const patchBlogFromAPI = ({id,token, ...params}) => {
  return request
    .patch(`post/${id}`, {
      ...params,
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

export {postBlogFromAPI, patchBlogFromAPI};
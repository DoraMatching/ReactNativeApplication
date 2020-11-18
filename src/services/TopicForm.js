import request from "../helpers/request";

const postTopicFromAPI = ({
  name,
  featuredImage,
  description,
  token,
}) => {
  return request
    .post(
      `topic`,
      {
        name,
        featuredImage,
        description,
        //isDraft : true,
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

const patchTopicFromAPI = ({id,token, ...params}) => {
  return request
    .patch(`topic/${id}`, {
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
  }
export {postTopicFromAPI, patchTopicFromAPI};
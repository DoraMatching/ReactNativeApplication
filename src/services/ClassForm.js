import request from "../helpers/request";

const postClassFromAPI = ({
  token,
  duration,
  ...rest
}) => {
  return request
    .post(
      `classe`,
      {
        duration : parseInt(duration),
        ...rest
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

const patchClassFromAPI = ({id,token, ...params}) => {
  return request
    .patch(`classe/${id}`, {
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

export {postClassFromAPI, patchClassFromAPI};
import request from "../helpers/request";

const postLessonFromAPI = ({id, token, duration, ...rest}) => {
  return request
    .post(
      `classe/${id}/lesson`,
      {
        duration: parseInt(duration),
        ...rest,
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

const patchLessonFromAPI = ({id, token, duration, ...params}) => {
  return request
    .patch(
      `lesson/${id}`,
      {
        duration: parseInt(duration),
        ...params,
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

const deleteLessonFromAPI = ({id, token}) => {
  return request
    .delete(`lesson/${id}`,{
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

const getLessonFromAPI = ({id, token, query}) => {
  return request
    .get(`classe/${id}/lessons?${query}`,{
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

export {postLessonFromAPI, patchLessonFromAPI, deleteLessonFromAPI, getLessonFromAPI};

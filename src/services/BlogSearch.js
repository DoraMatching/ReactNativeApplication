import request from "../helpers/request";

const getDataFromAPI = ({url}) => {
  return request
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const deleteDataFromAPI = ({id}) => {
  return request
    .delete(`post/${id}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export {getDataFromAPI, deleteDataFromAPI};

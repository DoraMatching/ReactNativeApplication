import request from "../helpers/request";

const postTrainerFromAPI = ({
 trainerProfile,
  token,
}) => {
  return request
    .post(
      `trainer/register`,
      {
       trainerProfile
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

// const patchTrainerFromAPI = ({id,token, ...params}) => {
//   return request
//     .patch(`Trainer/${id}`, {
//       ...params,
//     },{
//       headers: {
//         'Authorization': `Bearer ${token}` 
//       }
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       return error.response.data;
//     });
//   }
export {postTrainerFromAPI};
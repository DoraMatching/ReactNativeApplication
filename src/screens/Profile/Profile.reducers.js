import Actions from "./Profile.actions";
import BlogFormActions from "../BlogForm/BlogForm.actions";
import QuestionFormActions from "../QuestionForm/QuestionForm.actions";
import BlogFormEditActions from "../BlogFormEdit/BlogFormEdit.actions";
import QuestionFormEditActions from "../QuestionFormEdit/QuestionFormEdit.actions";
import QuestionDetailActions from "../QuestionDetail/QuestionDetail.actions";
import BlogDetailActions from "../BlogDetail/BlogDetail.actions";
// const BlogTagReducer = (data = null , action) => {
//   switch (action.type) {
//     case Actions.GET_BLOG_TAG_SUCCEEDED:
//       return action.data;

//     case Actions.GET_BLOG_TAG_FAILED:
//       return data;

//     default:
//       return data;
//   }
// };

const ProfileReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_SUCCEEDED:
      //console.log("get user success", action.data);
      return action.data;

    // case BlogFormActions.POST_BLOG_SUCCEEDED:
    // case QuestionFormActions.POST_QUESTION_SUCCEEDED:
    //   console.log("post blog user success", action.data);
    //   if (data) data.posts.unshift(action.data);
    //   return data;
    case Actions.GET_PROFILE_FAILED:
      return data;

    // case QuestionFormEditActions.UPDATE_QUESTION_SUCCEEDED:
    //   if(data) data.posts = data.posts.map((item) =>
    //     item.id === action.data.id ? action.data : item,
    //   );
    //   return data;

    default:
      return data;
  }
};

const PersonalBlogReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_SUCCEEDED:
      //console.log("get user success", action.data);
      return action.data.posts;

    case BlogFormActions.POST_BLOG_SUCCEEDED:
      //case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      console.log("post blog user success", action.data);
      //if (data) data.posts.unshift(action.data);
      return [action.data, ...data];
    case Actions.GET_PROFILE_FAILED:
      return data;

    case BlogFormEditActions.UPDATE_BLOG_SUCCEEDED:
      return data.map((item) =>
        item.id === action.data.id ? action.data : item,
      );

    case BlogDetailActions.POST_BLOG_COMMENT_SUCCEEDED:
      //console.log("Home reducer is called when post comment");
      return data.map((item) =>
        item.id === action.data.id
          ? {...item, comments: action.data.comments}
          : item,
      );

    case BlogDetailActions.PATCH_BLOG_COMMENT_SUCCEEDED:
      return dataItem.map((item) =>
        item.id === action.blogID
          ? {
              ...item,
              comments: item.comments.map((item) =>
                item.id === action.data.id ? action.data : item,
              ),
            }
          : item,
      );

    default:
      return data;
  }
};

const PersonalQuestionReducer = (data = [], action) => {
  switch (action.type) {
    case Actions.GET_PROFILE_SUCCEEDED:
      //console.log("get user success", action.data);
      return action.data.questions;

    //case BlogFormActions.POST_BLOG_SUCCEEDED:
    case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      //console.log("post blog user success", action.data);
      //if (data) data.posts.unshift(action.data);
      return [action.data, ...data];
    case Actions.GET_PROFILE_FAILED:
      return data;

    case QuestionFormEditActions.UPDATE_QUESTION_SUCCEEDED:
      return data.map((item) =>
        item.id === action.data.id ? action.data : item,
      );

    case QuestionDetailActions.POST_QUESTION_COMMENT_SUCCEEDED:
      //console.log("Home reducer is called when post comment");
      return data.map((item) =>
        item.id === action.data.id
          ? {...item, comments: action.data.comments}
          : item,
      );

    case QuestionDetailActions.PATCH_QUESTION_COMMENT_SUCCEEDED:
      return dataItem.map((item) =>
        item.id === action.questionID
          ? {
              ...item,
              comments: item.comments.map((item) =>
                item.id === action.data.id ? action.data : item,
              ),
            }
          : item,
      );

    default:
      return data;
  }
};

const OptionModal = (showOptionModal = () => {}, action) => {
  switch (action.type) {
    case Actions.GET_OPTION_MODAL:
      //console.log("get user success", action.params);
      return action.params;

    default:
      return showOptionModal;
  }
};

export {
  ProfileReducer,
  PersonalBlogReducer,
  PersonalQuestionReducer,
  OptionModal,
};

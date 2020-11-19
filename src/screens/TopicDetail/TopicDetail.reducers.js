import Actions from "./TopicDetail.actions";

const TopicDetailReducer = (data = null, action) => {
    switch (action.type) {
      case Actions.GET_TOPIC_DETAIL_SUCCEEDED:
        //console.log("get user success", action.data);
        return action.data;
  
      // case BlogFormActions.POST_BLOG_SUCCEEDED:
      // case QuestionFormActions.POST_QUESTION_SUCCEEDED:
      //   console.log("post blog user success", action.data);
      //   if (data) data.posts.unshift(action.data);
      //   return data;
      case Actions.GET_TOPIC_DETAIL_FAILED:
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

  export {TopicDetailReducer}
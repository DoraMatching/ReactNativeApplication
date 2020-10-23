import Actions from "./Home.actions";

const BlogReducer = (blogs = {}, action) => {
  switch (action.type) {
    case Actions.GET_BLOG_SUCCEEDED:
      return action.data;
    case Actions.GET_BLOG_FAILED:
      return blogs;

    default:
      return blogs;
  }
};

const BlogItemReducer = (blogItems = [], action) => {
  switch (action.type) {
    case Actions.GET_BLOG_SUCCEEDED:
      return [...blogItems, ...action.data.items];
    case Actions.GET_BLOG_FAILED:
      return blogItems;

    default:
      return blogItems;
  }
};

const QuestionReducer = (questions = {}, action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_SUCCEEDED:
      return action.data;
    case Actions.GET_QUESTION_FAILED:
      return questions;

    default:
      return questions;
  }
};

const QuestionItemReducer = (questionItems = [], action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_SUCCEEDED:
      return [...questionItems, ...action.data.items];
    case Actions.GET_QUESTION_FAILED:
      return questionItems;

    default:
      return questionItems;
  }
};

const HomeReducer = (data = null, action) => {
  switch (action.type) {
    case Actions.GET_BLOG_QUESTION_SUCCEEDED:
      return action.data;

    case Actions.GET_BLOG_QUESTION_FAILED:
      return data;

    default:
      return data;
  }
};

const HomeItemReducer = (dataItem = [], action) => {
  switch (action.type) {
    case Actions.GET_BLOG_QUESTION_SUCCEEDED:
      const shuffledData = shuffleData({
        blogs: action.data.blogs.items,
        questions: action.data.questions.items,
      });

      return [...dataItem, ...shuffledData];

    case Actions.GET_BLOG_QUESTION_FAILED:
      return dataItem;

    default:
      return dataItem;
  }
};

const shuffleData = (data) => {
  let results = [];

  Object.keys(data).forEach((resource) => {
    const currentData = data[resource]; // array
    currentData.forEach((prop) => {
      const _data = {...prop, type: resource};
      results.push(_data);
    });
  });

  return results.sort(() => Math.random() - 0.5);
};

export {
  BlogReducer,
  BlogItemReducer,
  QuestionReducer,
  QuestionItemReducer,
  HomeReducer,
  HomeItemReducer,
};

import Actions from './Home.actions';
const BlogReducer = (blogs = {}, action) => {
  // console.log("in BlogReducer");
    switch (action.type) {
      
    case Actions.GET_BLOG_SUCCEEDED:
      // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
      return action.data;
    case Actions.GET_BLOG_FAILED:
      // console.log("in BlogReducer GET_BLOG_FAILED");
      return blogs;
  
    default:
      return blogs;
    }
  };

const BlogItemReducer = (blogItems , action) => {
  // console.log("in BlogReducer");
    switch (action.type) {
      
    case Actions.GET_BLOG_SUCCEEDED:
      // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
      return [...blogItems, ...action.data.items];
    case Actions.GET_BLOG_FAILED:
      // console.log("in BlogReducer GET_BLOG_FAILED");
      return blogItems;
  
    default:
      return blogItems;
    }
  };
  
  const QuestionReducer = (questions, action) => {
    // console.log("in BlogReducer");
      switch (action.type) {
        
      case Actions.GET_QUESTION_SUCCEEDED:
        // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
        return action.data;
      case Actions.GET_QUESTION_FAILED:
        // console.log("in BlogReducer GET_BLOG_FAILED");
        return questions;
    
      default:
        return questions;
      }
    };
  
  const QuestionItemReducer = (questionItems = [], action) => {
    // console.log("in BlogReducer");
      switch (action.type) {
        
      case Actions.GET_QUESTION_SUCCEEDED:
        // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
        return [...questionItems, ...action.data.items];
      case Actions.GET_QUESTION_FAILED:
        // console.log("in BlogReducer GET_BLOG_FAILED");
        return questionItems;
    
      default:
        return questionItems;
      }
    };

  const HomeReducer = (data = [], action) => {
    let blogs = [], questions = [];
      switch (action.type) {

        case Actions.GET_QUESTION_SUCCEEDED:
          blogs = action.data.items;
          break;

        case Actions.GET_BLOG_SUCCEEDED:
          questions = action.data.items;    
          break;
      }
      return [...data, ...shuffleData({blogs, questions})]
  }
   
  const shuffleData = (data) => {
    let results = [];

    Object.keys(data).forEach(resource => {
      const currentData = data[resource]; // array
      currentData.forEach((prop) => {
        const _data = { ...prop, type: resource };
        results.push(_data);
      })
    })

    return results.sort(() => Math.random() - 0.5);
  };

  export {
    BlogReducer,
    BlogItemReducer,
    QuestionReducer,
    QuestionItemReducer,
    HomeReducer,
  };
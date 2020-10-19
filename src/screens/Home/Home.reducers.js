import Actions from './Home.actions';
const BlogReducer = (blogs = [], action) => {
  // console.log("in BlogReducer");
    switch (action.type) {
      
    case Actions.GET_BLOG_SUCCEEDED:
      // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
      return action.data;
    case Actions.GET_BLOG_FAILED:
      // console.log("in BlogReducer GET_BLOG_FAILED");
      return [];
  
    default:
      return blogs
    }
  };

const BlogItemReducer = (blogItems = [], action) => {
  // console.log("in BlogReducer");
    switch (action.type) {
      
    case Actions.GET_BLOG_SUCCEEDED:
      // console.log("in BlogReducer GET_BLOG_SUCCEEDED");
      return [...blogItems, ...action.data.items];
    case Actions.GET_BLOG_FAILED:
      // console.log("in BlogReducer GET_BLOG_FAILED");
      return blogItems;
  
    default:
      return blogItems
    }
  };
  
  export {
    BlogReducer,
    BlogItemReducer
  };
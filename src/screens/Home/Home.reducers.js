import Actions from './Home.actions';
const BlogReducer = (blogs = [], action) => {
    switch (action.type) {
  
    case Actions.GET_BLOG_SUCCEEDED:
      return action.data;
    case Actions.GET_BLOG_FAILED:
      return [];
  
    default:
      return blogs
    }
  };
  
  export default BlogReducer;
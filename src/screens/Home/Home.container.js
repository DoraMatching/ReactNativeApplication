import { connect } from "react-redux";
import  Home  from "./Home.screens";
import actions from "./Home.actions";
const mapStateToProps = (state) => {
    return {
        blogs : state.BlogReducer ,
        blogItems : !state.BlogItemReducer ? [] : state.BlogItemReducer,
    }
   
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBlogs : (params) => {
            // console.log("in onFetchBlogs");
            dispatch(actions.getBlogsAction(params))
        },
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

export default HomeContainer;
import { connect } from "react-redux";
import  Home  from "./Home.screens";
import actions from "./Home.actions";
const mapStateToProps = (state) => {
    return {
        blogs : state.BlogReducer ,
    }
   
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBlogs : (params) => {
            dispatch(actions.getBlogsAction(params))
        },
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

export default HomeContainer;
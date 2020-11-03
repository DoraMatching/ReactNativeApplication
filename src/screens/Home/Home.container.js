import {connect} from "react-redux";
import Home from "./Home.screens";
import actions from "./Home.actions";

const mapStateToProps = (state) => {
  return {
    data: state.HomeReducer ,
    dataItem : !state.HomeItemReducer ? [] : state.HomeItemReducer,
    userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (params) => {
      dispatch(actions.getDataAction(params));
    },
    onRefreshData : (params) => {
      dispatch(actions.getRefreshDataAction(params));
    },
    onOpenBlogDetail : (data) => {
      dispatch(actions.openBlogDetailAction(data));
    },
    onOpenQuestionDetail : (data) => {
      dispatch(actions.openQuestionDetailAction(data));
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

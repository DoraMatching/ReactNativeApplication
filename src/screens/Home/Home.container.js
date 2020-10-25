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
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

import {connect} from "react-redux";
import ProfileScreen from "./ProfileInfo.screens";
import actions from "./ProfileInfo.actions";
import {Field, reduxForm} from "redux-form";
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (params) => {
      dispatch(actions.getProfileAction(params));
    },
   
  };
};

const mapStateToProps = (state) => {
  return {
    //id: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
    data : state.ProfileInfoReducer,
  };
};



const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);

export default ProfileContainer;

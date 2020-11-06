import {connect} from "react-redux";
import ProfileScreen from "./Profile.screens";
import actions from "../Login/Login.actions";
import {Field, reduxForm} from "redux-form";
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.LoginReducer,
  };
};



const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);

export default ProfileContainer;

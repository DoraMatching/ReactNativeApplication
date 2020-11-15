import {connect} from "react-redux";
import ProfileScreen from "./Profile.screens";
import actions from "./Profile.actions";
import {Field, reduxForm} from "redux-form";
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (params) => {
      dispatch(actions.getProfileAction(params));
    },
    onGetOptionModal: (params) => {
      dispatch(actions.getOptionModalAction(params));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    id: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
    token: !state.LoginReducer.message ? "" : state.LoginReducer.message.token,
    data : state.ProfileReducer,
  };
};



const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);

export default ProfileContainer;

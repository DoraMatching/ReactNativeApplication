import {connect} from "react-redux";
import actions from "./Schedule.actions";
import Schedule from "./Schedule.screens";
import moment from 'moment';
const colors = ['#e6add8','#ade6d8','#d8ade6','#e6bcad'];

const mapStateToProps = (state) => ({
    schedule : state.PersonalScheduleReducer.map(item => {
        return {
          start : moment(item.startTime).format("YYYY-MM-DD HH:mm:ss"),
          end : moment(item.startTime).add(item.duration, "minutes").format("YYYY-MM-DD HH:mm:ss"),
          title : item.name,
          summary : `Duration : ${item.duration}`,
          color : colors[Math.floor(Math.random() * colors.length)]
        }}),
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPersonalSchedule: (params) => {
      dispatch(actions.getPersonalScheduleAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

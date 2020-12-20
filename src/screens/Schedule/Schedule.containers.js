import {connect} from "react-redux";
import actions from "./Schedule.actions";
import LessonActions from "../LessonForm/LessonForm.actions";
import Schedule from "./Schedule.screens";
import moment from 'moment';


const mapStateToProps = (state) => ({
    schedule : state.PersonalScheduleReducer.map(item => {
        return {
          id: item.id,
          start : moment(item.startTime).format("YYYY-MM-DD HH:mm:ss"),
          end : moment(item.startTime).add(item.duration, "minutes").format("YYYY-MM-DD HH:mm:ss"),
          title : item.name,
          summary : `Duration : ${item.duration}`,
          color: item.color,
          
        }}),
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
    roles: !state.UserLoginReducer ? "" : state.UserLoginReducer.roles,
    lesson: state.LessonDetailReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPersonalSchedule: (params) => {
      dispatch(actions.getPersonalScheduleAction(params));
    },
    onFetchLessonDetail: (params) => {
      dispatch(LessonActions.getLessonDetailAction(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

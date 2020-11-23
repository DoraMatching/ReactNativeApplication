import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from "../ProfileInfo.actions";

export class PersonalClassroom extends Component {
  
    componentWillMount(){
        this.props.onFetchUserClassroom({id : this.props.userID, token : this.props.token});
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text> {JSON.stringify(this.props.data)} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.ProfileInfoClassroomReducer,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
    userID : state.ProfileInfoReducer.user ? state.ProfileInfoReducer.user.id : state.ProfileInfoReducer.id,
})

const mapDispatchToProps = (dispatch) => {
    return {
      onFetchUserClassroom: (params) => {
        dispatch(actions.getProfileClassroomAction(params));
      },
     
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalClassroom)

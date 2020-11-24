import React, { Component } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from "../ProfileInfo.actions";
import ListItemClassSearch from '../../../components/ListItemClassSearch'

export class PersonalClassroom extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: false,
        };
    
       
      }
    componentWillMount(){
        //console.log("componentWillMount is called");
        this.props.onFetchUserClassroom({id : this.props.userID, token : this.props.token});
    }
    render() {
       // console.log("render", this.props.data);
        if (!this.props.data ||this.props.data.items.length == 0)
      return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text> No classroom </Text>
        </View>
      );
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{
            marginVertical: 5,
            //backgroundColor: "white",
          }}
          //onRefresh={this.refreshData}
          //refreshing={this.state.isLoading}
          data={this.props.data.items}
          renderItem={({item, index}) => {
            //if (!this.optionModal) this.refreshData();
            const userID = this.props.userID;
            const token = this.props.token;
            //console.log("flatlist", item);
            return (
              <Pressable onPress={() => this.props.classDetailModal(item.id)}>
              <ListItemClassSearch
                {...{
                  token,
                  userID,
                  //showOptionModal: this.props.showOptionModal
                   // ,
                  item,
                }}></ListItemClassSearch>
                </Pressable>
            );
          }}
          keyExtractor={(item, index) => item.id}></FlatList>

        
      </View>
    );
    }
}

const mapStateToProps = (state) => ({
    data : state.ProfileInfoClassroomReducer,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
    userID : state.ProfileInfoReducer.user ? state.ProfileInfoReducer.user.id : state.ProfileInfoReducer.id,
    classDetailModal: state.ClassDetailModal,
})

const mapDispatchToProps = (dispatch) => {
    return {
      onFetchUserClassroom: (params) => {
        dispatch(actions.getProfileClassroomAction(params));
      },
     
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalClassroom)

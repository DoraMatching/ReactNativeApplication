import React, {Component} from "react";

import {connect} from "react-redux";
import {View, Text, FlatList, Pressable} from "react-native";
import ClassItem from "../../../components/ListItemClassSearch";
import actions from "../Profile.actions";

export class PersonalClass extends Component {
    constructor(props) {
        super(props);
        this.props.OnFetchClass({id : this.props.userID, token : this.props.token});
    }
  render() {
    if (this.props.classes.length == 0)
      return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text> No class </Text>
        </View>
      );
      console.log("Props classes: ", this.props.classes);
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{
            marginVertical: 5,
            //backgroundColor: "white",
          }}
          data={this.props.classes}
          renderItem={({item, index}) => {
            const userID = this.props.userID;
            const token = this.props.token;
            return (
              <Pressable
                onPress={() => {
                  this.props.showClassDetailModal(item.id);
                }}>
                <ClassItem
                  {...{
                    token,
                    userID,
                    author: {id: userID},
                    //showOptionModal: this.props.showOptionModal,
                    item,
                  }}></ClassItem>
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => item.id}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  classes: state.PersonalClassReducer,
  userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
  token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
  showOptionModal: state.OptionModal,
});

const mapDispatchToProps = (dispatch) => {
    return {
        OnFetchClass : (params) => {
            dispatch(actions.getProfileClassesAction(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalClass);

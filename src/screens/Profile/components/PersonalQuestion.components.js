import React, {Component} from "react";

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {View, Text, FlatList} from "react-native";
import BlogItem from "../../../components/ListItemQuestionTop";

export class PersonalQuestion extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    if (this.props.questions.length == 0)
      return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text> No question </Text>
        </View>
      );
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{
            marginVertical: 5,
            //backgroundColor: "white",
          }}
          data={this.props.questions}
          renderItem={({item, index}) => {
            const userID = this.props.userID;
            const token = this.props.token;
            return <BlogItem {...{
              token,
              userID,
              showOptionModal: this.props.showOptionModal,
              ...item,
            }}></BlogItem>;
          }}
          keyExtractor={(item, index) => item.name}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.PersonalQuestionReducer,
  userID: !state.LoginReducer.message ? "" : state.LoginReducer.message.id,
  token: !state.LoginReducer.message ? "" : state.LoginReducer.message.token,
  showOptionModal: state.OptionModal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion);

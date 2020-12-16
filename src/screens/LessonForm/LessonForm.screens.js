import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList, Pressable} from "react-native";
import LessonAccordion from "./components/LessonAccordion";
import Button from "react-native-button";
import {connect} from "react-redux";
import colors from "../../themes/color";
import actions from './LessonForm.actions';

class LessonForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: "page=1&limit=4&order=DESC",
      isLoading: false,
    };
    this.props.onFetchLesson({id : this.props.classID,token: this.props.token, query: this.state.query})
  }
  render() {
    const renderItem = ({item}) => (
      <LessonAccordion data={{action: "edit", ...item}} />
    );
    // if (props.data.success && props.data.success == false){
    //   alert(props.data.message);
    // }
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: "flex-start",
          marginTop: 40,
        }}>
        {console.log("lessons", this.props.lessons)}
        <FlatList
          style={{marginTop: 5}}
          data={this.props.lessons}
          renderItem={renderItem}
          //keyExtractor={(item) => item.id}
          ListFooterComponent={() => (
            <LessonAccordion
              data={{
                //title: "create",
                action: "create",
              }}></LessonAccordion>
          )}
        />
        { this.props.setNext && this.props.onClose &&
          <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <Button
              style={styles.button}
              onPress={() => this.props.setNext(false)}>
              Back
            </Button>
            <Button style={styles.button} onPress={() => this.props.onClose()}>
              Finish
            </Button>
          </View>
        }
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  lessons: state.LessonReducer,
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
});

const mapDispatchToProps = (dispatch) => {
  return {
    // onCreateLesson: (item) => {
    //   dispatch(actions.addLessonAction(item));
    // },
    onFetchLesson: (item) => {
      dispatch(actions.getLessonAction(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonForm);

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
    backgroundColor: colors.primary,
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

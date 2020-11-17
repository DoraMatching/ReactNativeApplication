import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList, Pressable} from "react-native";
import LessonAccordion from "./components/LessonAccordion";
import {connect} from "react-redux";

class LessonForm extends Component {
  render() {
    const renderItem = ({item}) => <LessonAccordion data={{action: "edit", ...item}} />;
    return (
      <View
        style={{flex: 1, paddingHorizontal: 10, justifyContent: "flex-start"}}>
            {/* {console.log("lessons", this.props.lessons)} */}
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
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  lessons: state.LessonReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateLesson: (item) => {
      dispatch(actions.addLessonAction(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonForm);

const styles = StyleSheet.create({});

import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import {connect} from "react-redux";
import ScaledImage from "../../components/ScaledImage";

import topic from "../../data/topic";
import colors from "../../themes/color";

import ListItemClass from "../../components/ListItemClass";

import ClassDetailModal from '../ClassDetail/ClassDetail.modals'
import actions from "./TopicDetail.actions";
var screen = Dimensions.get("window");
export class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.props.onFetchTopicDetail({id: this.props.id, token: this.props.token});
    this.props.onFetchTopicClass({
      url: `topic/${this.props.id}/classes?page=1&limit=20&order=DESC`,
      token: this.props.token,
    });

    this.classDetailModal = null;

    this.setClassDetailModalRef = (element) => {
      this.classDetailModal = element;
    };
  }
  render() {
    if (!this.props.data) return <></>;
    const {featuredImage, name, description, classes} = this.props.data;
    return (
      <View style={styles.layoutContainer}>
        <StatusBar backgroundColor={"#ECD5BB"} />
        <View style={styles.titleContainer}>
          <View style={styles.featuredImage}>
            <ScaledImage
              {...{
                uri: featuredImage,
                width:
                  screen.width - styles.titleContainer.paddingHorizontal * 2,
                ...styles.featuredImage,
              }}
            />
          </View>
          <Text style={styles.topicName} adjustsFontSizeToFit numberOfLines={2}>
            {name}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <>
              <Text style={styles.label}>About this topic</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.label}>Classes</Text>
              {
                this.props.classList?.items.map((item) => (
                  <Pressable onPress={() => {
                    if (this.classDetailModal)
                      this.classDetailModal.showClassDetailModal(item.id);
                  }}>
                    <ListItemClass item={item} />
                  </Pressable>
                ))
                //console.log(this.props.classList)
              }
              {/* <ListItemClass></ListItemClass>
              <ListItemClass></ListItemClass>
              <ListItemClass></ListItemClass> */}
            </>
          </ScrollView>
        </View>
        <ClassDetailModal ref={this.setClassDetailModalRef}></ClassDetailModal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.UserLoginReducer ? state.UserLoginReducer.token : "",
  data: state.TopicDetailReducer,
  classList: state.TopicClassReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTopicDetail: (params) => {
      dispatch(actions.getTopicDetailAction(params));
    },
    onFetchTopicClass: (params) => {
      dispatch(actions.getTopicClassAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 40,
    backgroundColor: "#ECD5BB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  featuredImage: {
    borderRadius: 10,
    flex: 80,
  },
  contentContainer: {
    flex: 60,
    paddingHorizontal: 20,
  },
  topicName: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    //borderColor: "transparent",
    //borderWidth: 0.5,
    flexWrap: "wrap",
    flex: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {},
});

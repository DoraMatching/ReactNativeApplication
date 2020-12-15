import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import colors from "../../themes/color";
import FinderIcon from "../../images/finder.svg";
import actions from "./Search.actions";

import ListItemUser from "../../components/ListItemUser";
import ListItemQuestionSearch from "../../components/ListItemQuestionSearch";
import ListItemBlogSearch from "../../components/ListItemBlogSearch";

import Icon from "react-native-vector-icons/Ionicons";

import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";
import BlogDetailModal from "../BlogDetail/BlogDetail.modals";
import ProfileInfoModal from "../ProfileInfo/ProfileInfo.modals";
var screen = Dimensions.get("window");
class Search extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);

    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };

    this.questionDetailModal = null;

    this.setQuestionDetailModalRef = (element) => {
      this.questionDetailModal = element;
    };

    this.profileInfoModal = null;

    this.setProfileInfoModalRef = (element) => {
      this.profileInfoModal = element;
    };
  }

  search(key) {
    const scope = ["USER", "POST", "QUESTION"];
    if (!key.trim()) {
      this.props.onFetchNoResult();
      return;
    }
    this.props.onFetchSearch({key, scope, token: this.props.token});
  }

  render() {
    //console.log("search", this.props);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <ScrollView>
          <View style={styles.searchContainer}>
            <View style={styles.searchInput}>
              <Pressable
                style={styles.searchIcon}
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" size={22} color="#606770" />
              </Pressable>

              <TextInput
                style={styles.inputText}
                placeholder={"I'm looking for..."}
                placeholderTextColor={"#999"}
                underlineColorAndroid={"#fff"}
                autoFocus={true}
                autoCorrect={false}
                ref={(inputSearch) => {
                  this.inputSearch = inputSearch;
                }}
                onChangeText={this.search}
              />
            </View>
          </View>

          <View style={{marginTop: 5}}>
            {this.props.data &&
              this.props.data.users &&
              this.props.data.users.length != 0 && (
                <Text style={styles.label}>Results for users</Text>
              )}
            {this.props.data &&
              this.props.data?.users?.map((item) => (
                <Pressable
                  onPress={() => {
                    this.profileInfoModal.showProfileInfoModal(
                      item.id,
                    );;
                  }}>
                  <ListItemUser
                    {...{
                      token: this.props.token,
                      userID: this.props.userID,
                      item,
                    }}
                  />
                </Pressable>
              ))}
            {this.props.data &&
              this.props.data.posts &&
              this.props.data.posts.length != 0 && (
                <Text style={styles.label}>Results for blogs</Text>
              )}
            {this.props.data &&
              this.props.data?.posts?.map((item) => (
                <Pressable
                  onPress={() => {
                    this.blogDetailModal.showBlogDetailModal(item);
                  }}>
                  <ListItemBlogSearch
                    {...{
                      token: this.props.token,
                      userID: this.props.userID,
                      ...item,
                    }}
                  />
                </Pressable>
              ))}
            {this.props.data &&
              this.props.data.questions &&
              this.props.data.questions.length != 0 && (
                <Text style={styles.label}>Results for questions</Text>
              )}
            {this.props.data &&
              this.props.data?.questions?.map((item) => (
                <Pressable
                  onPress={() => {
                    this.questionDetailModal.showQuestionDetailModal(item);
                  }}>
                  <ListItemQuestionSearch
                    {...{
                      token: this.props.token,
                      userID: this.props.userID,
                      item,
                    }}
                  />
                </Pressable>
              ))}
          </View>
        </ScrollView>
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
        <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
        <ProfileInfoModal ref={this.setProfileInfoModalRef}></ProfileInfoModal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.SearchReducer,
  userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
  token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearch: (params) => {
      dispatch(actions.getSearchAction(params));
    },
    onFetchNoResult: () => {
      dispatch(actions.getNoResultAction());
    },
  };
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primary,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  searchContainer: {
    zIndex: 0,
    backgroundColor: colors.primary,
    width: screen.width,
    overflow: "hidden",
    paddingBottom: 15,
    paddingTop: 20,
  },
  searchInput: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 3,
    height: 45,
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  inputText: {
    marginTop: 9,
    marginLeft: 43,
    fontSize: 15,
    color: "#999",
  },
  searchIcon: {
    position: "absolute",
    left: 13,
    top: 12,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

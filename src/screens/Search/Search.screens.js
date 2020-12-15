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

import "react-native-gesture-handler";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
var screen = Dimensions.get("window");
const UserResultList = (props) => {
  return (
    <>
      {props.data && props.data.users && props.data.users.length == 0 && (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>No results found for trainers</Text>
        </View>
      )}
      {props.data &&
        props.data?.users
          ?.filter((item) => item.roles.indexOf("TRAINER") !== -1)
          .map((item) => (
            <Pressable
              onPress={() => {
                props.showProfileInfoModal(item.id);
              }}>
              <ListItemUser
                {...{
                  token: props.token,
                  userID: props.userID,
                  item,
                }}
              />
            </Pressable>
          ))}
    </>
  );
};
const BlogResultList = (props) => {
  return (
    <>
      {props.data && props.data.posts && props.data.posts.length == 0 && (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>No results found for blogs</Text>
        </View>
      )}
      {props.data &&
        props.data?.posts?.map((item) => (
          <Pressable
            onPress={() => {
              props.showBlogDetailModal && props.showBlogDetailModal(item);
            }}>
            <ListItemBlogSearch
              {...{
                token: props.token,
                userID: props.userID,
                ...item,
              }}
            />
          </Pressable>
        ))}
    </>
  );
};
const QuestionResultList = (props) => {
  return (
    <>
      {props.data && props.data.questions && props.data.questions.length == 0 && (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>No results found for questions</Text>
        </View>
      )}
      {props.data &&
        props.data?.questions?.map((item) => (
          <Pressable
            onPress={() => {
              props.showQuestionDetailModal(item);
            }}>
            <ListItemQuestionSearch
              {...{
                token: props.token,
                userID: props.userID,
                item,
              }}
            />
          </Pressable>
        ))}
    </>
  );
};
class Search extends Component {
  constructor(props) {
    super(props);
    console.log("Search.screen: ", props);
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
    const {
      route: {
        params: {scope},
      },
    } = this.props;
    console.log("l55 in search.screen: ", scope);

    //const scoped = ["USER", "POST", "QUESTION"];
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
          //justifyContent: "space-between",
          //alignItems: "flex-start",
        }}>
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
        <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
        <ProfileInfoModal ref={this.setProfileInfoModalRef}></ProfileInfoModal>

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
       
        {this.props.data &&
        this.props.data.users?.length == 0 &&
        this.props.data.posts?.length == 0 &&
        this.props.data.questions?.length == 0 ? (
          <View
            style={{
              flex: 1,
              marginTop: 5,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text>No results found.</Text>
          </View>
        ) : (
          this.props.data && <>
            <NavigationContainer independent={true} style={{marginVertical: 5}}>
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: "#606770",
                  labelStyle: {fontSize: 12, fontWeight: "bold"},
                  //style: {backgroundColor: "powderblue"},
                  indicatorStyle: {backgroundColor: colors.primary},
                  //scrollEnabled : true,
                }}>
                {/* {this.props.data &&
                    this.props.data.posts &&
                    this.props.data.posts.length != 0 && ( */}
                <Tab.Screen
                  name="MyBlog"
                  component={connect(() => ({
                    data: this.props.data,
                    showBlogDetailModal: this.blogDetailModal
                      ?.showBlogDetailModal,
                    token: this.props.token,
                    userID: this.props.userID,
                  }))(BlogResultList)}
                  options={{tabBarLabel: "Blogs"}}
                />
                {/* )} */}
                {/* {this.props.data &&
                  this.props.data.questions &&
                  this.props.data.questions.length != 0 && ( */}
                <Tab.Screen
                  name="MyQuestion"
                  component={connect(() => ({
                    data: this.props.data,
                    showQuestionDetailModal: this.questionDetailModal
                      .showQuestionDetailModal,
                    token: this.props.token,
                    userID: this.props.userID,
                  }))(QuestionResultList)}
                  options={{tabBarLabel: "Questions"}}
                />
                {/* )} */}
                {/* {this.props.data &&
                  this.props.data.users &&
                  this.props.data.users.length != 0 && ( */}
                <Tab.Screen
                  name="MyClassroom"
                  component={connect(() => ({
                    data: this.props.data,
                    showProfileInfoModal: this.profileInfoModal
                      .showProfileInfoModal,
                    token: this.props.token,
                    userID: this.props.userID,
                  }))(UserResultList)}
                  options={{tabBarLabel: "Trainers"}}
                />
                {/* )} */}
              </Tab.Navigator>
            </NavigationContainer>
            <View>
              {/* {this.props.data &&
                this.props.data.users &&
                this.props.data.users.length != 0 && (
                  <Text style={styles.label}>Results for trainers</Text>
                )}
              {this.props.data &&
                this.props.data?.users
                  ?.filter((item) => item.roles.indexOf("TRAINER") !== -1)
                  .map((item) => (
                    <Pressable
                      onPress={() => {
                        this.profileInfoModal.showProfileInfoModal(item.id);
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
                ))} */}
            </View>
          </>
        )}
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

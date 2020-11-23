import React, {Component} from "react";
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import ListItemBlog from "../../components/ListItemBlog";
import ListItemQuestion from "../../components/ListItemQuestion";
import ListItemTrainer from "../../components/ListItemTrainer";
import ListItemTopic from "../../components/ListItemTopic";

import colors from "../../themes/color";
import FinderIcon from "../../images/finder.svg";
import BlogDetailModal from "../BlogDetail/BlogDetail.modals";
import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";

import OptionModal from "../../helpers/optionModal";

import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

import topic from "../../data/topic";

import FloatingButtonAction from "../../helpers/FloatingActionButton";

import BlogFormEditModal from "../BlogFormEdit/BlogFormEdit.modals";
import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";

import ProfileInfoModal from "../ProfileInfo/ProfileInfo.modals";

import TopicDetailModal from "../TopicDetail/TopicDetail.modals";
import {TopicDetail} from "../TopicDetail/TopicDetail.screens";

var screen = Dimensions.get("window");
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      url: "home?page=1&limit=4&order=DESC",
      isLoading: false,
    };
    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };

    this.questionDetailModal = null;

    this.setQuestionDetailModalRef = (element) => {
      this.questionDetailModal = element;
    };

    this.optionModal = null;

    this.setOptionModalRef = (element) => {
      this.optionModal = element;
    };

    this.blogFormEditModal = null;

    this.setBlogFormEditModalRef = (element) => {
      this.blogFormEditModal = element;
    };

    this.questionFormEditModal = null;

    this.setQuestionFormEditModalRef = (element) => {
      this.questionFormEditModal = element;
    };

    this.profileInfoModal = null;

    this.setProfileInfoModalRef = (element) => {
      this.profileInfoModal = element;
    };

    this.topicDetailModal = null;

    this.setTopicDetailModalRef = (element) => {
      this.topicDetailModal = element;
    };
  }

  componentWillMount() {
    //console.log("in componentWillMount", this.props.data);
    //console.log("in componentWillMount", this.props.dataItem);
    if (!this.props.data) {
      //console.log("in componentWillMount");
      const {url} = this.state;
      this.props.onFetchData({url});
      this.props.onFetchTopic({url: "topics?page=1&limit=20&order=DESC"});
    }
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  // navigateToDetail = (item, nestedNavigator, screen) => {
  //   console.log("navigateToDetail is called");
  //   this.props.navigation.navigate(
  //     nestedNavigator,
  //     {screen: screen ,
  //      params : item
  //     });
  // }

  refreshData = () => {
    this.setState({isLoading: true});
    const {url} = this.state;
    this.props.onRefreshData({url});
    this.setState({isLoading: false});
  };

  retrieveMore = () => {
    //console.log("in RetrieveMore", this.props.data);
    //console.log("retrieveMore is called");
    let url = this.props.data.links.next;
    if (url === "") {
      return;
    }
    this.props.onFetchData({url});
  };

  render() {
    const {search} = this.state;
    if (this.props.alert) {
      if (this.props.alert !== "success") alert(this.props.alert);
      this.optionModal.onClose();
    }
    //this.props.navigation.navigate("BlogDetail");
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View style={{marginBottom: 0}}>
          <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
          <QuestionDetailModal
            ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
          <BlogFormEditModal
            ref={this.setBlogFormEditModalRef}></BlogFormEditModal>
          <QuestionFormEditModal
            ref={this.setQuestionFormEditModalRef}></QuestionFormEditModal>
          <ProfileInfoModal
            ref={this.setProfileInfoModalRef}></ProfileInfoModal>
          <TopicDetailModal
            ref={this.setTopicDetailModalRef}></TopicDetailModal>
          <OptionModal
            ref={this.setOptionModalRef}
            onOpenBlogEditForm={
              this.blogFormEditModal
                ? this.blogFormEditModal.showBlogFormEditModal
                : () => {}
            }
            onOpenQuestionEditForm={
              this.questionFormEditModal
                ? this.questionFormEditModal.showQuestionFormEditModal
                : () => {}
            }></OptionModal>
          <StatusBar backgroundColor={colors.primary} />
          <View style={styles.searchContainer}>
            <View style={styles.searchInput}>
              <View style={styles.searchIcon}>
                <FinderIcon width={22} height={22} />
              </View>

              <TextInput
                style={styles.inputText}
                placeholder={"I'm looking for..."}
                placeholderTextColor={"#999"}
                underlineColorAndroid={"#fff"}
                autoCorrect={false}
                ref={(inputSearch) => {
                  this.inputSearch = inputSearch;
                }}
              />
            </View>
          </View>

          <FlatList
            style={{backgroundColor: "#C4C4C4"}}
            data={this.props.dataItem}
            keyExtractor={(item) => item.id}
            refreshing={this.state.isLoading}
            onRefresh={this.refreshData}
            renderItem={({item, index}) => {
              //console.log("Flatlist", this.props.userID);
              //console.log("optionModal", this.optionModal);
              if (!this.optionModal) this.refreshData();
              const userID = this.props.userID;
              const token = this.props.token;
              if (item.type == "question")
                return (
                  <Pressable
                    onPress={() => {
                      //this.props.navigation.navigate("BlogDetail");
                      this.props.onOpenQuestionDetail(item);
                      //console.log("HomeScreen", this.blogDetailModal);
                      this.questionDetailModal.showQuestionDetailModal(item);
                    }}>
                    <ListItemQuestion
                      {...{
                        token,
                        userID,
                        showOptionModal: this.optionModal
                          ? this.optionModal.showOptionModal
                          : () => {},
                        item,
                      }}
                    />
                  </Pressable>
                );
              if (item.type == "post")
                return (
                  <Pressable
                    onPress={() => {
                      //this.props.navigation.navigate("BlogDetail");
                      this.props.onOpenBlogDetail(item);
                      //console.log("HomeScreen", this.blogDetailModal);
                      if (this.blogDetailModal)
                        this.blogDetailModal.showBlogDetailModal(item);
                    }}>
                    <ListItemBlog
                      {...{
                        token,
                        userID,
                        showOptionModal: this.optionModal
                          ? this.optionModal.showOptionModal
                          : () => {},
                        ...item,
                      }}
                    />
                  </Pressable>
                );
              if (item.type == "user-list")
                return (
                  <FlatList
                    style={{
                      marginVertical: 5,
                      backgroundColor: "white",
                    }}
                    horizontal={true}
                    data={item.userList}
                    renderItem={({item, index}) => {
                      return (
                        <Pressable
                          onPress={() => {
                            //this.props.navigation.navigate("BlogDetail");
                            //this.props.onOpenBlogDetail(item);
                            //console.log("HomeScreen", this.blogDetailModal);
                            if (this.profileInfoModal)
                              this.profileInfoModal.showProfileInfoModal(
                                item.id,
                              );
                          }}>
                          <ListItemTrainer {...item}></ListItemTrainer>
                        </Pressable>
                      );
                    }}
                    keyExtractor={(item, index) => item.hour}></FlatList>
                );
            }}
            onEndReached={this.retrieveMore}
            ListHeaderComponent={() => (
              <FlatList
                style={{
                  marginVertical: 5,
                  backgroundColor: "white",
                }}
                horizontal={true}
                data={this.props.topic}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      onPress={() => {
                        if (this.topicDetailModal)
                          this.topicDetailModal.showTopicDetailModal(item.id);
                      }}>
                      <ListItemTopic {...item}></ListItemTopic>
                    </Pressable>
                  );
                }}
                keyExtractor={(item, index) => item.id}></FlatList>
            )}
          />
          <FloatingButtonAction />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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

import React, {Component} from "react";
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Dimensions
} from "react-native";
import ListItemBlog from "../../components/ListItemBlog";
import ListItemQuestion from "../../components/ListItemQuestion";
import ListItemTrainer from "../../components/ListItemTrainer";
import ListItemTopic from "../../components/ListItemTopic";

import colors from "../../themes/color";
import FinderIcon from "../../images/finder.svg";
import BlogDetailModal from "../BlogDetail/BlogDetail.modals";
import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import topic from '../../data/topic';

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
  }

  componentWillMount() {
    console.log("in componentWillMount", this.props.data);
    console.log("in componentWillMount", this.props.dataItem);
    if (!this.props.data) {
      console.log("in componentWillMount");
      const {url} = this.state;
      this.props.onFetchData({url});
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
    console.log("in RetrieveMore", this.props.data);
    console.log("retrieveMore is called");
    let url = this.props.data.links.next;
    if (url === "") {
      return;
    }
    this.props.onFetchData({url});
  };

  render() {
    const {search} = this.state;
    //this.props.navigation.navigate("BlogDetail");
    return (
      <SafeAreaView  style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{marginBottom: 0}}>
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
                  style={{
                    marginVertical: 5,
                    backgroundColor: "white",
                  }}
                  horizontal={true}
                  data={topic}
                  renderItem={({item, index}) => {
                    return <ListItemTopic {...item}></ListItemTopic>;
                  }}
                  keyExtractor={(item, index) => item.name}></FlatList>

        <FlatList
          style={{backgroundColor: "#C4C4C4", }}
          data={this.props.dataItem}
          keyExtractor={(item) => item.id}
          refreshing={this.state.isLoading}
          onRefresh={this.refreshData}
          renderItem={({item, index}) => {
            console.log("Flatlist", this.props.userID);
            const userID = this.props.userID;
            if (item.type == "question")
              return (
                <Pressable
                  onPress={() => {
                    //this.props.navigation.navigate("BlogDetail");
                    this.props.onOpenQuestionDetail(item);
                    //console.log("HomeScreen", this.blogDetailModal);
                    this.questionDetailModal.showQuestionDetailModal(item);
                  }}>
                  <ListItemQuestion {...{userID, ...item}} />
                </Pressable>
              );
            if (item.type == "post")
              return (
                <Pressable
                  onPress={() => {
                    //this.props.navigation.navigate("BlogDetail");
                    this.props.onOpenBlogDetail(item);
                    console.log("HomeScreen", this.blogDetailModal);
                    this.blogDetailModal.showBlogDetailModal(item);
                  }}>
                  <ListItemBlog {...{userID, ...item}} />
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
                    return <ListItemTrainer {...item}></ListItemTrainer>;
                  }}
                  keyExtractor={(item, index) => item.hour}></FlatList>
              );
              
          }
        }
          onEndReached={this.retrieveMore}
        />
        <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
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

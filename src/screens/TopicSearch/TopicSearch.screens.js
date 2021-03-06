import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, TextInput, Pressable} from "react-native";
import FinderIcon from "../../images/finder.svg";
import {connect} from "react-redux";
import colors from "../../themes/color";
import actions from "./TopicSearch.actions";

import TopicDetailModal from "../TopicDetail/TopicDetail.modals";

import ListItemTopicSearch from "../../components/ListItemTopicSearch";
const item = {
  id: 1,
  name: "Vue-js",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
  featuredImage:
    "https://ncjsa.net/wp-content/uploads/featured-image-thumb-1470x940.png",
};
export class TopicSearch extends Component {
    constructor(props) {
        super(props);
        //console.log("TopicSearch constructor is called");
        this.state = {
          search: "",
          url: "topics?page=1&limit=20&order=DESC",
          isLoading: false,
        };

       // this.props.onFetchTop({url: this.state.url});
       this.topicDetailModal = null;

       this.setTopicDetailModalRef = (element) => {
         this.topicDetailModal = element;
       };
      }

      refreshData = () => {
        this.setState({isLoading: true});
        const {url} = this.state;
        this.props.onRefreshData({url});
        this.setState({isLoading: false});
      };

      retrieveMore = () => {
        if (!this.props.data && typeof this.props.data === 'undefined') return;
        // console.log("TopicSearch in RetrieveMore 0", !this.props.data && typeof this.props.data === 'undefined')
        // console.log("TopicSearch in RetrieveMore", this.props.data);
        // console.log("retrieveMore is called");
        let url = this.props.data? this.props.data.links.next : "";
        // console.log("TopicSearch url: ", url);
        if (url === "") {
          // console.log("TopicSearch inside if block");
          return;
        }
        this.props.onFetchTop({url});
      };
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <View style={styles.searchContainer}>
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
        </View> */}
        <FlatList
          style={{}}
          onRefresh={this.refreshData}
          refreshing={this.state.isLoading}
          data={this.props.topic ? this.props.topic : []}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
           // if (!this.optionModal) this.refreshData();
            const userID = this.props.userID;
            const token = this.props.token;
            return (
              <Pressable
                onPress={() => {
                  //if (this.topicDetailModal)
                  this.props.showTopicDetailModal(item.id);
                }}>
                <ListItemTopicSearch
                  {...{
                    token,
                    userID,
                    // showOptionModal: this.optionModal
                    //   ? this.optionModal.showOptionModal
                    //   : () => {},
                    item,
                  }}
                />
              </Pressable>
            );
          }}
          onEndReached={this.retrieveMore}
        />
        <TopicDetailModal
            ref={this.setTopicDetailModalRef}></TopicDetailModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 0,
    backgroundColor: colors.primary,
    width: "100%",
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

const mapStateToProps = (state) => ({
    topic : !state.TopicTopItemReducer ? [] : state.TopicTopItemReducer,
    data : !state.TopicTopReducer ? null : state.TopicTopReducer,
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
});

const mapDispatchToProps = (dispatch) => {
    return {
      // onFetchTag: (params) => {
      //   dispatch(actions.getQuestionTagAction(params));
      // },
      onFetchTop: (params) => {
        dispatch(actions.getTopicTopAction(params));
      },
      onRefreshData: (params) => {
        dispatch(actions.getRefreshDataAction(params));
      },
      //   onOpenQuestionDetail : (data) => {
      //     dispatch(HomeActions.openQuestionDetailAction(data));
      //   }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TopicSearch);

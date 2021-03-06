import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import TagListItem from "../../components/ListItemTag";
import FinderIcon from "../../images/finder.svg";
import colors from "../../themes/color";
import ListItemQuestionSearch from "../../components/ListItemQuestionSearch";
import QuestionDetailModal from "../QuestionDetail/QuestionDetail.modals";
import FloatingButtonAction from "../../helpers/FloatingActionButton";
import OptionModal from "../../helpers/optionModal";
import QuestionFormEditModal from "../QuestionFormEdit/QuestionFormEdit.modals";

export default class QuestionSearch extends Component {
  constructor(props) {
    super(props);
    console.log("QuestionSearch constructor is called");
    this.state = {
      search: "",
      url: "questions?page=1&limit=4&order=DESC",
      isLoading: false,
    };
    //this.props.onFetchTag({url: "tag-question?page=1&limit=20&order=DESC"});
    this.props.onFetchTop({url: this.state.url});

    this.questionDetailModal = null;

    this.setQuestionDetailModalRef = (element) => {
      this.questionDetailModal = element;
    };

    this.optionModal = null;

    this.setOptionModalRef = (element) => {
      this.optionModal = element;
    };

    this.questionFormEditModal = null;

    this.setQuestionFormEditModalRef = (element) => {
      this.questionFormEditModal = element;
    };
  }

  refreshData = () => {
    this.setState({isLoading: true});
    const {url} = this.state;
    this.props.onRefreshData({url});
    this.setState({isLoading: false});
  };

  retrieveMore = () => {
    console.log("QuestionSearch in RetrieveMore", this.props.data);
    console.log("retrieveMore is called");
    let url = this.props.data.links.next;
    if (url === "") {
      return;
    }
    this.props.onFetchTop({url});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <QuestionDetailModal
          ref={this.setQuestionDetailModalRef}></QuestionDetailModal>
        <QuestionFormEditModal
          ref={this.setQuestionFormEditModalRef}></QuestionFormEditModal>
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

        {/* <Text style={{...styles.label}}>Top Questions</Text> */}
        <FlatList
          style={{}}
          onRefresh={this.refreshData}
          refreshing={this.state.isLoading}
          data={this.props.tops ? this.props.tops : []}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            if (!this.optionModal) this.refreshData();
            const userID = this.props.userID;
            const token = this.props.token;
            return (
              <Pressable
                onPress={() => {
                  this.props.onOpenQuestionDetail(item);
                  //if (this.questionDetailModal)
                    this.props.showQuestionDetailModal(item);
                }}>
                <ListItemQuestionSearch
                  {...{
                    token,
                    userID,
                    showOptionModal: this.props.showOptionModal,
                    item,
                  }}
                />
              </Pressable>
            );
          }}
          onEndReached={this.retrieveMore}
        />
        <FloatingButtonAction />
      </View>
    );
  }
}

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

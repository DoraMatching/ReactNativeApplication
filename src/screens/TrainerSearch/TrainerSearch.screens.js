import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, TextInput, Pressable} from "react-native";

import {connect} from "react-redux";
import actions from "./TrainerSearch.actions";
import colors from "../../themes/color";
import ListItemTrainer from "../../components/ListItemTrainerSearch";
import FinderIcon from "../../images/finder.svg";
import FloatingButtonAction from "../../helpers/FloatingActionButton";
const item = {
  username: "christian",
  email: "christian@enclave.vn",
  avatarUrl: "https://www.w3schools.com/w3images/avatar6.png",
};
export class TrainerSearch extends Component {
    constructor(props) {
        super(props);
        console.log("QuestionSearch constructor is called");
        this.state = {
          search: "",
          url: "trainers?page=1&limit=4&order=DESC",
          isLoading: false,
        };
        //this.props.onFetchTag({url: "tag-question?page=1&limit=20&order=DESC"});
        this.props.onFetchTop({url: this.state.url});
    
        // this.questionDetailModal = null;
    
        // this.setQuestionDetailModalRef = (element) => {
        //   this.questionDetailModal = element;
        // };
    
        // this.optionModal = null;
    
        // this.setOptionModalRef = (element) => {
        //   this.optionModal = element;
        // };
    
        // this.questionFormEditModal = null;
    
        // this.setQuestionFormEditModalRef = (element) => {
        //   this.questionFormEditModal = element;
        // };
      }
    
      refreshData = () => {
        this.setState({isLoading: true});
        const {url} = this.state;
        this.props.onRefreshData({url});
        this.setState({isLoading: false});
      };
    
      retrieveMore = () => {
        console.log("TrainerSearch in RetrieveMore", this.props.data);
        console.log("retrieveMore is called");
        let url = this.props.data.links.next;
        if (url === "") {
          return;
        }
        this.props.onFetchTop({url});
      };
  render() {
    if (!this.props.data) return <></>;
    return (
      <View style={{flex: 1}}>
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
          style={{}}
          onRefresh={this.refreshData}
          refreshing={this.state.isLoading}
          data={this.props.tops ? this.props.tops : []}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
           // if (!this.optionModal) this.refreshData();
            const userID = this.props.userID;
            const token = this.props.token;
            return (
              <Pressable
                onPress={() => {
                //   this.props.onOpenQuestionDetail(item);
                //   if (this.questionDetailModal)
                //     this.questionDetailModal.showQuestionDetailModal(item);
                }}>
                <ListItemTrainer
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
        {/* <ListItemTrainer item={item}></ListItemTrainer> */}
        <FloatingButtonAction />
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
const mapStateToProps = (state) => {
  //console.log("Blog tag reducer", state.BlogTagReducer);
  return {
    //tags : state.QuestionTagReducer,
    data: state.TrainerTopReducer,
    tops: state.TrainerTopItemReducer,
    userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
    token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchTag: (params) => {
    //   dispatch(actions.getQuestionTagAction(params));
    // },
    onFetchTop: (params) => {
      dispatch(actions.getTrainerTopAction(params));
    },
    onRefreshData: (params) => {
      dispatch(actions.getRefreshDataAction(params));
    },
    //   onOpenQuestionDetail : (data) => {
    //     dispatch(HomeActions.openQuestionDetailAction(data));
    //   }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerSearch);

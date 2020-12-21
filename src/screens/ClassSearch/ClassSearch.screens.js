import React, {Component} from "react";
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Dimensions,
  Text,
} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import colors from "../../themes/color";
import Icon from "react-native-vector-icons/Ionicons";
import ListItemClass from "../../components/ListItemClass";

import ClassDetailModal from "../ClassDetail/ClassDetail.modals";

import actions from "./ClassSearch.actions";
var screen = Dimensions.get("window");
class ClassSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      url: "classes?page=1&limit=10&order=DESC",
      isLoading: false,
    };
    console.log("l30", this.state);
    console.log("l31", this.props);

    this.classDetailModal = null;

    this.setClassDetailModalRef = (element) => {
      this.classDetailModal = element;
    };
    this.search = this.search.bind(this);
    this.retrieveMore = this.retrieveMore.bind(this);
  }
  search(key) {
    this.setState({search : key});
    console.log("l38", this.props);
    console.log("l41", this.state);
    
    const {url} = this.state;
    const scoped = ["USER", "POST", "QUESTION"];
    // if (!key.trim()) {
    //   this.props.onFetchNoResult();
    //   return;
    // }
    this.props.onRefreshData({key, url, token: this.props.token});
  }
  retrieveMore = () => {
    //console.log("in RetrieveMore", this.props.data);
    console.log("this: ", this);
    
    console.log("retrieveMore is called", this.props.data?.links.next);
    let url = this.props.data.links.next;
    if (url === "") {
      return;
    }
    this.props.onFetchData({url,key: this.state.search, token : this.props.token});
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //justifyContent: "space-between",
          //alignItems: "flex-start",
        }}>
        <ClassDetailModal ref={this.setClassDetailModalRef}></ClassDetailModal>

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

        {this.props.dataItem?.length == 0 ? (
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
          this.props.dataItem && (
            <>
              <FlatList
                style={{paddingHorizontal: 5}}
                data={this.props.dataItem}
                keyExtractor={(item) => item.id}
                refreshing={this.state.isLoading}
                onRefresh={this.refreshData}
                onEndReached={this.retrieveMore}
                renderItem={({item, index}) => {
                  //console.log("Flatlist", this.props.userID);
                  //console.log("optionModal", this.optionModal);
                  //if (!this.optionModal) this.refreshData();
                //   const userID = this.props.userID;
                //   const token = this.props.token;

                  return (
                    <Pressable
                      onPress={() => {
                        if (this.classDetailModal)
                          this.classDetailModal.showClassDetailModal(item.id);
                      }}>
                      <ListItemClass item={item} />
                    </Pressable>
                  );
                }}
                onEndReached={this.retrieveMore}
              />
              <View></View>
            </>
          )
        )}
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
const mapStateToProps = (state) => ({
  data: state.ClassSearchReducer,
  dataItem: !state.ClassSearchItemReducer ? [] : state.ClassSearchItemReducer,
  token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (params) => {
      dispatch(actions.getClassSearchAction(params));
    },
    onRefreshData: (params) => {
      dispatch(actions.getRefreshClassSearchAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassSearch);

import React, {Component} from "react";
import {View, Text, FlatList, Pressable} from "react-native";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../ProfileInfo.actions";
import ListItemClassSearch from "../../../components/ListItemClassSearch";

export class PersonalClassroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }
  componentWillMount() {
    //console.log("componentWillMount is called");
    this.props.onFetchUserClassroom({
      id: this.props.userID,
      token: this.props.token,
    });
  }
  refreshData = () => {
    this.setState({isLoading: true});
    const {url} = this.state;
    this.props.onRefreshData({url});
    this.setState({isLoading: false});
  };

  retrieveMore = () => {
    // console.log("QuestionSearch in RetrieveMore", this.props.data);
    // console.log("retrieveMore is called");
    let url = this.props.data.links.next;
    if (url === "") {
      return;
    }
    this.props.onFetchMoreUserClassroom({url, token: this.props.token});
  };
  render() {
    console.log("render", this.props.dataItem);
    if (!this.props.classDetailModal) return <></>;
    if (!this.props.data || this.props.data.items.length == 0)
      return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text> No classroom </Text>
        </View>
      );
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{
            marginVertical: 5,
            //backgroundColor: "white",
          }}
          onRefresh={this.refreshData}
          refreshing={this.state.isLoading}
          data={this.props.dataItem}
          renderItem={({item, index}) => {
            
            const userID = this.props.userID;
            const token = this.props.token;
            //console.log("flatlist", item);
            return (
              <Pressable onPress={() => this.props.classDetailModal(item.id)}>
                <ListItemClassSearch
                  {...{
                    token,
                    userID,
                    //showOptionModal: this.props.showOptionModal
                    // ,
                    item,
                  }}></ListItemClassSearch>
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => item.id}
          onEndReached={this.retrieveMore}></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.ProfileInfoClassroomReducer,
  dataItem :  state.ProfileInfoClassroomItemReducer,
  token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
  userID: state.ProfileInfoReducer.user
    ? state.ProfileInfoReducer.user.id
    : state.ProfileInfoReducer.id,
  classDetailModal: state.ClassDetailModal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUserClassroom: (params) => {
      dispatch(actions.getProfileClassroomAction(params));
    },
    onFetchMoreUserClassroom: (params) => {
      dispatch(actions.getMoreProfileClassroomAction(params));
    },
    onRefreshData : (params) => {
      dispatch(actions.getRefreshDataAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalClassroom);

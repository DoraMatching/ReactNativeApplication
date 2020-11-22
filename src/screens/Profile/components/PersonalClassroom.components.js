// import React, {Component} from "react";
// import {View, Text, FlatList} from "react-native";
// import BlogItem from "../../../components/ListItemBlogTop";
// import PropTypes from "prop-types";
// import {connect} from "react-redux";


// import ProfileAction from '../Profile.actions';

// class PersonalBlog extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//     };

   
//   }

//   refreshData = () => {
//     this.setState({isLoading: true});
//     const {url} = this.state;
//     this.props.onFetchUser({id : this.props.userID, token : this.props.token});
//     this.setState({isLoading: false});
//   };

//   render() {
//     //console.log("myblog: ", this.props.blogs);
//     if (this.props.blogs.length == 0)
//       return (
//         <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//           <Text> No blog </Text>
//         </View>
//       );
//     return (
//       <View style={{flex: 1}}>
//         <FlatList
//           style={{
//             marginVertical: 5,
//             //backgroundColor: "white",
//           }}
//           onRefresh={this.refreshData}
//           refreshing={this.state.isLoading}
//           data={this.props.blogs}
//           renderItem={({item, index}) => {
//             //if (!this.optionModal) this.refreshData();
//             const userID = this.props.userID;
//             const token = this.props.token;

//             return (
//               <BlogItem
//                 {...{
//                   token,
//                   userID,
//                   author : {id : userID},
//                   showOptionModal: this.props.showOptionModal
//                     ,
//                   ...item,
//                 }}></BlogItem>
//             );
//           }}
//           keyExtractor={(item, index) => item.name}></FlatList>

        
//       </View>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   blogs: state.PersonalBlogReducer,
//   userID: !state.UserLoginReducer ? "" : state.UserLoginReducer.id,
//   token: !state.UserLoginReducer ? "" : state.UserLoginReducer.token,
//   showOptionModal: state.OptionModal,
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//       onFetchUser: (params) => {
//         dispatch(ProfileAction.getProfileAction(params));
//       },
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PersonalBlog);

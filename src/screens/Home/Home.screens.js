import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import ListItemBlog from '../../components/ListItemBlog';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
      url : `https://api.dev.doramatching.tk/posts?page=1&limit=2&order=DESC`,
      page: 1,
      limit : 2,
      order: 'DESC',
      blogs: [],
      isRetrieved : false,
    };
  }

  componentWillMount(){
    const { url } = this.state
    this.props.onFetchBlogs({ url });
    
      this.setState({blogs : [...this.state.blogs,  ...this.props.blogs.items ]});
  }
  

  updateSearch = (search) => {
    this.setState({ search });
  };

  retrieveMore = () => {
    const { links } = this.props.blogs;
    console.log("retrieveMore", links.next);
    if (links.next !== "" ){
      console.log("retrieveMore", "is inside if");
        this.props.onFetchBlogs({ url : links.next});
        //this.setState({isRetrieved : true});
        
        console.log("retrieveMore");
        //this.setState({blogs : [...this.state.blogs, ...this.props.blogs.items]});
    }
    
  };

  render() {
    const { search } = this.state;
    // if (this.state.isRetrieved) {
    //   this.setState({blogs : [...this.state.blogs, ...this.props.blogs.items]});
    //   this.setState({isRetrieved : false});
    // }
    return (
      <View
       
      >
       <SearchBar
        platform={"android"}
        containerStyle={{ elevation : 2}}
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <FlatList
        style={{backgroundColor : "#C4C4C4", marginBottom: 80,}}
        data={this.state.blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ListItemBlog {...item} />}
        onEndReached={this.retrieveMore}
       />

      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})


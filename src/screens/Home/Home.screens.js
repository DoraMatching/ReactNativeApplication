import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import ListItemBlog from '../../components/ListItemBlog';
import ListItemQuestion from '../../components/ListItemQuestion';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
      urlBlog : `posts?page=1&limit=3&order=DESC`,
      urlQuestion : `questions?page=1&limit=3&order=DESC`,
     
    };
    // console.log("in here");
   
    
  }
  
  componentWillMount(){
    console.log("this.props.blogs.link", this.props.data);
    if (!this.props.data){
          console.log("in componentWillMount");
          const { urlBlog, urlQuestion } = this.state;
          this.props.onFetchBlogsQuestions({urlBlog, urlQuestion});
          }
    }
    
    //this.setState({blogs : [...this.state.blogs,  ...this.props.blogs.items ]});
  
    
    //
  
  

  updateSearch = (search) => {
    this.setState({ search });
  };

  retrieveMore = () => {
    let urlBlog  = this.props.data.blogs.links.next;
    let urlQuestion = this.props.data.questions.links.next;
    if (urlBlog === "" && urlQuestion === "") return;
    this.props.onFetchBlogsQuestions({urlBlog, urlQuestion});
   };

  render() {
    
    const { search } = this.state;
    
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
      {/* <FlatList
        style={{backgroundColor : "#C4C4C4", marginBottom: 80,}}
        data={this.props.blogItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ListItemBlog {...item} />}
        onEndReached={this.retrieveMore}
       /> */}

      <FlatList
        style={{backgroundColor : "#C4C4C4", marginBottom: 80,}}
        data={this.props.dataItem}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => item.type == "questions" ? <ListItemQuestion {...item}/> : <ListItemBlog {...item} />}
        onEndReached={this.retrieveMore}
       />

      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})


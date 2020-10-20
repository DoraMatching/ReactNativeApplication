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
      url : `posts?page=1&limit=3&order=DESC`,
      questionUrl : `questions?page=1&limit=3&order=DESC`,
      // page: 1,
      // limit : 2,
      // order: 'DESC',
      // //blogs: [],
      // isRetrieved : false,
      data : {
        blogs : [],
        questions: [],
      },
    };
    // console.log("in here");
   
    
  }
  
  componentWillMount(){
    console.log("this.props.blogs.link", this.props.blogs.links);
    if (!this.props.blogs.links || !this.props.blogs.links.first){
          console.log("in componentWillMount");
          const { url, questionUrl } = this.state;
          this.props.onFetchBlogs({ url  });
          this.props.onFetchQuestions({ url : questionUrl});
          this.setState({
            data : {
              blogs : this.props.blogItems,
              questions: this.props.questionItems,
            }
          })
    }
    
    //this.setState({blogs : [...this.state.blogs,  ...this.props.blogs.items ]});
  }
    
    //
  
  

  updateSearch = (search) => {
    this.setState({ search });
  };

  retrieveMore = () => {
    const blogLinks  = this.props.blogs.links;
    const questionLinks = this.props.questions.links;
    //console.log("retrieveMore : link =", links);
    //this.setState({retrievedUrl: ""});
    // console.log("retrieveMore", links.next);
    if ( blogLinks.next !== ""  && questionLinks.next !== "" ){
      
       //console.log("retrieveMore");
        this.props.onFetchBlogs({ url : blogLinks.next});
        this.props.onFetchQuestions({ url : questionLinks.next});
        //this.setState({isRetrieved : true});
        
        console.log("retrieveMore");
        //this.setState({blogs : [...this.state.blogs, ...this.props.blogs.items]});
    }
    // else if (blogLinks.next !== ""){
    //   this.props.onFetchBlogs({ url : blogLinks.next});
    // } 
    // else if (questionLinks.next !== ""){
    //   this.props.onFetchQuestions({url : questionLinks.next});
    // }
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
        data={this.props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => item.type == "Questions" ? <ListItemQuestion {...item}/> : <ListItemBlog {...item} />}
        onEndReached={this.retrieveMore}
       />

      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})


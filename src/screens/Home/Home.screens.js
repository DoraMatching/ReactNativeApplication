import React, {Component} from "react";
import {FlatList, StyleSheet, View, StatusBar} from "react-native";
import SearchBar from 'react-native-search-bar';
import ListItemBlog from "../../components/ListItemBlog";
import ListItemQuestion from "../../components/ListItemQuestion";
import ListItemTrainer from "../../components/ListItemTrainer";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      url: "home?page=1&limit=4&order=DESC",
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

    return (
      <View>
         <StatusBar backgroundColor="blueviolet"  />
        {/* <SearchBar
          ref="searchBar"
          placeholder="Search..."
          onChangeText={this.updateSearch}
          
        /> */}

        <FlatList
          style={{backgroundColor: "#C4C4C4", marginBottom: 80}}
          data={this.props.dataItem}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            if (item.type == "question") return <ListItemQuestion {...item} />;
            if (item.type == "post") return <ListItemBlog {...item} />;
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
          }}
          onEndReached={this.retrieveMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

import React, {Component} from "react";
import {FlatList, StyleSheet, View, StatusBar, TextInput, TouchableOpacity} from "react-native";
import SearchBar from "react-native-search-bar";
import ListItemBlog from "../../components/ListItemBlog";
import ListItemQuestion from "../../components/ListItemQuestion";
import ListItemTrainer from "../../components/ListItemTrainer";
import colors from "../../themes/color";
import FinderIcon from "../../images/finder.svg";
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

  navigateToDetail = (item, nestedNavigator, screen) => {
    console.log("navigateToDetail is called");
    this.props.navigation.navigate(
      nestedNavigator, 
      {screen: screen ,
       params : item
      });
  }

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
    console.log("props navigate in Home", this.props.navigation);
    return (
      <View>
        <StatusBar backgroundColor={colors.primary} />
        <View style={styles.searchContainer}>
        
        <View style={styles.searchInput}>
          <View  style={styles.searchIcon} >
          <FinderIcon width={22} height={22}/>
          </View>
        
                <TextInput 
                  style={styles.inputText}
                  placeholder={'I\'m looking for...'}
                  placeholderTextColor={'#999'}
                  underlineColorAndroid={'#fff'}
                  autoCorrect={false}
                 
                  ref={(inputSearch) => {
                    this.inputSearch = inputSearch;
                  }}
                />
              </View>
              </View>
              
        <FlatList
          style={{backgroundColor: "#C4C4C4", marginBottom: 80}}
          data={this.props.dataItem}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            console.log("Flatlist", this.props.userID);
            const userID = this.props.userID;
            if (item.type == "question")
              return (
                <ListItemQuestion {...{userID, ...item}} />
                
              );
            if (item.type == "post")
              return (
                <TouchableOpacity onPress={ () => this.navigateToDetail(item,"Blogs", "BlogDetail")}>
                  <ListItemBlog {...{userID, ...item}} />
                  </TouchableOpacity>
              );
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

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 99,
    backgroundColor: colors.primary,
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 15,
    paddingTop: 20,
  },
  searchInput: {
    display: 'flex',
    backgroundColor: '#fff',
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
    color: '#999',
  },
  searchIcon: {
    position: 'absolute',
    left: 13,
    top: 12,
  },
});

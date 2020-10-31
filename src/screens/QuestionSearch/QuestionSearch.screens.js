import React, {Component} from "react";
import {Text, View, StyleSheet, FlatList, TextInput} from "react-native";
import TagListItem from "../../components/ListItemTag";
import FinderIcon from "../../images/finder.svg";
import colors from "../../themes/color";
import ListItemQuestionSearch from '../../components/ListItemQuestionSearch';


export default class QuestionSearch extends Component {
  constructor(props) {
    super(props);
    console.log("QuestionSearch constructor is called");
    this.state = {
    };
    this.props.onFetchTag({url : 'tag-question?page=1&limit=20&order=DESC'});
    this.props.onFetchTop({url : 'questions?page=1&limit=3&order=DESC'});
  }

  render() {
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
          <Text style={{...styles.label, marginTop: 10}}>Tags</Text>
          <View
            style={{
              ...styles.horizontalLayout,
              marginBottom: 0,
              marginLeft: 10,
              flexWrap: "wrap",
            }}>
            {this.props.tags.items.map((item) => {
              return <TagListItem item={item} />;
            })}
          </View>
          <Text style={{...styles.label}}>Top Questions</Text>
          <FlatList
            style={{}}
            data={this.props.tops.items}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => <ListItemQuestionSearch {...item}/>}
          />
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
      zIndex: 99,
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
  

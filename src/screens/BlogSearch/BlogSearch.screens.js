import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import FinderIcon from "../../images/finder.svg";

import ListItemBlogSearch from "../../components/ListItemBlogSearch";
import {FloatingAction} from "react-native-floating-action";
import colors from "../../themes/color";
import {SafeAreaView} from "react-native-safe-area-context";
import BlogDetailModal from "../BlogDetail/BlogDetail.modals";

import BlogFormModal from "../BlogForm/BlogForm.modals";

const actions = [
  {
    text: "Create your blog",
    //icon: require("../../images/book.svg"),
    name: "bt_create",
    position: 2,
  },
];
var screen = Dimensions.get("window");
export default class BlogSearch extends Component {
  constructor(props) {
    super(props);
    //console.log("BlogSearch constructor is called");
    //this.props.onFetchTag({url: "tag-post?page=1&limit=20&order=DESC"});
    this.props.onFetchTop({url: "posts?page=1&limit=3&order=DESC"});
    this.blogFormModal = null;

    this.setBlogFormModalRef = (element) => {
      this.blogFormModal = element;
    };

    this.blogDetailModal = null;

    this.setBlogDetailModalRef = (element) => {
      this.blogDetailModal = element;
    };
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <View style={{flex: 1}}>
          <BlogDetailModal ref={this.setBlogDetailModalRef}></BlogDetailModal>
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
          {/* <Text style={{...styles.label, marginTop: 10}}>Tags</Text>
        <View
          style={{
            ...styles.horizontalLayout,
            marginBottom: 0,
            marginLeft: 10,
            flexWrap: "wrap",
          }}>
          {this.props.tags ? this.props.tags.items.map((item) => {
            return <TagListItem item={item} />;
          }) : <></>}
        </View> */}
          <Text style={{...styles.label}}>Top Blogs</Text>
          <FlatList
            style={{}}
            data={this.props.tops ? this.props.tops.items : []}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <Pressable
              onPress={() => {
                this.props.onOpenBlogDetail(item);
                if (this.blogDetailModal) this.blogDetailModal.showBlogDetailModal(item);
              }}>
                <ListItemBlogSearch {...item} />
              </Pressable>
            )}
          />
          <FloatingAction
            actions={actions}
            onPressItem={(name) => {
              if (name === "bt_create") this.blogFormModal.showBlogFormModal();
            }}
          />
          <BlogFormModal ref={this.setBlogFormModalRef}></BlogFormModal>
        </View>
      </SafeAreaView>
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

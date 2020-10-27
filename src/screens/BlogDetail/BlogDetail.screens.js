import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TagListItem from "../../components/ListItemTag";
import Comment from '../../components/Comment';

import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }
  render() {
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    const {author, comments, content, createdAt, featuredImage, subTitle, tags, title, updatedAt} = this.props.route.params;
    return (
      <ScrollView>
        <View style={{...styles.container}}>
          <Text style={{...styles.title}}>
            {title}
          </Text>
          <View
            style={{
              ...styles.horizontalLayout,
              marginVertical: 5,
              flexWrap: "wrap",
            }}>
            {tags.map((item) => {
              return <TagListItem item={item} />;
            })}
          </View>
          <View
            style={{
              ...styles.horizontalLayout,
              alignItems: "center",
              marginVertical: 5,
            }}>
            <Image
              style={{width: 45, height: 45, borderRadius: 1000}}
              resizeMode="cover"
              source={{
                uri:
                  author.avatarUrl,
              }}
            />
            <Text style={{marginLeft: 10}}>
              Written by <Text style={{...styles.author}}>{author.name}</Text> on{" "}
              <Text>{createdAt}</Text>
            </Text>
          </View>
          <Text style={{...styles.description}}>
            {subTitle}
          </Text>
          <Image
            style={{width: "100%", height: 300, marginVertical: 5}}
            resizeMode="cover"
            source={{
              uri: featuredImage,
            }}
          />
          <Text style={{...styles.content}}>
            {content}
          </Text>
          <TouchableOpacity
            style={{...styles.horizontalLayout, alignItems: 'flex-end', marginVertical: 5}}
            onPress={() => this.setState({isLiked: !this.state.isLiked})}>
            <Image
              style={{width: 30, height: 30}}
              resizeMode="cover"
              source={imgSrc}
            />
            <Text style={{fontSize: 15,paddingLeft: 5,  fontWeight: 'bold'}}>
              25 people liked this blog
            </Text>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 5,}}>
              Comments (2)
          </Text>
          <Comment></Comment>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 5,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  author: {
    fontWeight: "bold",
  },
  date: {},
  description: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  featuredImage: {},
  content: {
    marginVertical: 5,
  },
});

import React, {Component} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import TagListItem from "../../components/ListItemTag";
import colors from "../../themes/color";
import likedIcon from "../../images/LikedIcon.png";
import unlikedIcon from "../../images/UnlikedIcon.png";
export default class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }
  render() {
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    return (
      <View style={{...styles.container}}>
        <View style={{...styles.horizontalLayout, marginTop: 20}}>
          <Image
            style={{
              width: 45,
              height: 45,
              borderRadius: 1000,
              marginRight: 10,
            }}
            resizeMode="cover"
            source={{
              uri: "https://www.w3schools.com/w3images/avatar2.png",
            }}
          />
          <View>
            <Text style={{...styles.username}}>raymond</Text>
            <Text style={{...styles.time}}>Asked Monday 7:30PM</Text>
          </View>
        </View>
        <Text style={{...styles.title}}>
          Viết website: tự viết code nhưng phần nội dung copy từ các trang khác
          như Wiki, youtube thì có bị coi là vi phạm bản quyền không?
        </Text>
        <View style={{...styles.horizontalLayout}}>
          {[{name: "Banana"}, {name: "Orange"}, {name: "Pineapple"}].map(
            (item) => {
              return <TagListItem item={item} />;
            },
          )}
        </View>

        <Text style={{...styles.content}}>
          Chào mọi người, em đang viết một Website (tự viết để luyện kĩ năng chứ
          ko phải để bán) về các nhân vật nổi tiếng, code thì em tự viết nhưng
          phần nội dung (như ngày sinh quê quán rồi các thành tựu, hình ảnh…) em
          copy từ các trang khác như Wiki, youtube thì có bị coi là vi phạm bản
          quyền rồi bị kiện cáo gì ko ạ?
        </Text>
        <TouchableOpacity
          style={{
            ...styles.horizontalLayout,
            alignItems: "flex-end",
            marginVertical: 5,
          }}
          onPress={() => this.setState({isLiked: !this.state.isLiked})}>
          <Image
            style={{width: 30, height: 30}}
            resizeMode="cover"
            source={imgSrc}
          />
          <Text style={{fontSize: 15, paddingLeft: 5, fontWeight: "bold"}}>
            25 people liked this question
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,

    paddingEnd: 5,
    marginBottom: 5,
    color: "#3d3d4e",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  content: {
      padding: 10,
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 5,
      marginVertical: 5,
  }
});

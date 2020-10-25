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
    return (
      <ScrollView>
        <View style={{...styles.container}}>
          <Text style={{...styles.title}}>
            UI Components và bước đầu hướng đến MicroViewControllers trong lập
            trình iOS
          </Text>
          <View
            style={{
              ...styles.horizontalLayout,
              marginVertical: 5,
              flexWrap: "wrap",
            }}>
            {[{name: "C#"}, {name: "Golang"}, {name: "Python"}].map((item) => {
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
                  "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",
              }}
            />
            <Text style={{marginLeft: 10}}>
              Written by <Text style={{...styles.author}}>Trần Văn A</Text> on{" "}
              <Text>January, 10th, 2019</Text>
            </Text>
          </View>
          <Text style={{...styles.description}}>
            Diễn đàn voz không còn quá xa lạ với nhiều dev. Giao diện cổ của nó
            khi dùng mobile thì ức chế lòi dom. Đợt làm lại next voz tưởng ngon
            hơn, ai ngờ vứt cái phân trang đi, nhiều hôm vào đọc topic đang theo
            dõi mà kéo mỏi cả tay.
          </Text>
          <Image
            style={{width: "100%", height: 300, marginVertical: 5}}
            resizeMode="cover"
            source={{
              uri: "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg",
            }}
          />
          <Text style={{...styles.content}}>
            Khi bạn làm việc nhiều với Java, chắc hẳn bạn đã "chán ngấy" với
            việc tạo ra các getters, setters hay các constructors với các params
            khác nhau cho Model class. Điều này không chỉ làm cho mã nguồn của
            class đó nhiều lên, gây rối khi ta muốn kiểm tra lại các
            method/function chính của class đó, hoặc đơn giản chỉ là gây khó
            chịu khi chúng ta phải làm đi làm lại công việc insert nhàm chán đó.
            (với một người lười như tớ thì đây là một điều hết sức kinh khủng
            ^^! ) Với một số lí do như trên và nhiều hơn thế nữa thì Lombok ra
            đời giúp cho bạn loại bỏ bớt đi những đoạn mã nguồn tẻ nhạt đó chỉ
            bằng những Anotations. Project Lombok là một thư viện java tự động
            tích hợp vào Editor và Build tools, làm tăng tốc java cho bạn. Bằng
            việc sử dụng các Anotations của Lombok, bạn đã có được đầy đủ tính
            năng mà bạn cần!
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

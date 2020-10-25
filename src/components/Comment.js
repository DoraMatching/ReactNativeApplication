import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
        <View style={{...styles.container}}>
          <View style={{...styles.horizontalLayout,  alignItems: "center",}}>
            <Image
              style={{width: 45, height: 45, borderRadius: 1000}}
              resizeMode="cover"
              source={{
                uri:
                  "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",
              }}
            />
            <View
              style={{
                paddingHorizontal: 10,
                justifyContent: "center",
              }}>
              <Text style={{...styles.name}} numberOfLines={2}>
                Curtis
              </Text>
              {/* <TimeAgo time={this.props.updatedAt} style={{...styles.time}} /> */}
              <Text style={{...styles.time}}>2 minutes ago</Text>
            </View>
          </View>
          <Text style={{...styles.comment}}>
            Nghĩa là : hiện tại mình đang chỉ dùng 1 ip của now.sh cung cấp cho
            đọc source voz.vn. Sẽ bị block request khi đông người truy cập. Nên
            mình sẽ dùng bot của Google thông qua Google App script
            (URLFetchAPI) cào dữ liệu. Gia tặng dải IP request lên voz.vn, tránh
            bị block.
          </Text>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    borderRadius: 5,
    padding: 10,
    //marginHorizontal: 10,
  },
  horizontalLayout: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    
  },
  time: {
    fontSize: 11,
    fontWeight: "300",
    paddingEnd: 5,
    marginBottom: 5,
  },
  comment: {
      marginVertical: 5,
  },
});

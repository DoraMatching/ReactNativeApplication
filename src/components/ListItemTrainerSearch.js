import React, {Component} from "react";
import {Text, View, StyleSheet, Image} from "react-native";

export default class ListItemTrainerSearch extends Component {
  render() {
    //console.log("ListItemTrainer",this.props);
    if (!this.props.item) return <></>;
    
    const {username, email, avatarUrl, classes} = this.props.item.user;
    return (
      <View style={styles.container}>
        <View style={styles.identityContainter}>
          <Image
            style={styles.avatar}
            resizeMode="cover"
            source={{
              uri: avatarUrl,
            }}
          />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text></Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.emailContainer}>
            <Text style={styles.label}>Email</Text>
            <Text>{email}</Text>
          </View>
          <View style={styles.classesContainer}>
            <Text style={styles.label}>Classes</Text>
            <Text>{classes ? classes.length : 0}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
   
  },
  identityContainter: {
    flexDirection: "row",
    marginBottom: 10,
  },
  username: {
      fontWeight: "bold",
      fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    marginRight: 10,
    borderColor: "#c4c4c4",
    borderWidth: 0.5,
  },
  infoContainer: {
    flexDirection: "row",
    
  },
  emailContainer:{
    flex: 60,
  },
  classesContainer: {
    flex: 40,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

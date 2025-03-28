import { MaterialIcons } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

class Header extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoContainer} testID="header-logo">
            <Image
              source={require("../assets/download.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.sideIcons}>
            <TouchableOpacity testID="header-cast">
              <MaterialIcons name="cast" size={24} />
            </TouchableOpacity>
            <TouchableOpacity testID="header-notification">
              <MaterialIcons name="notifications" size={24} />
            </TouchableOpacity>
            <TouchableOpacity testID="header-search">
              <MaterialIcons name="search" size={24} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={{height:40}}>
        <ScrollView style={styles.headerScroll} horizontal showsHorizontalScrollIndicator={false}>
          {["All", "Music", "Gaming", "News", "Sports", "Live", "Podcasts","Thrillers" ,"Mixed","IPL","Programming"].map((item, index) => (
            <View key={index} style={styles.scrollItem}>
              <Text style={styles.scrollText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
        </View>
      
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  logoContainer: {
    marginTop: 50,
    height: 50,
    width: 100,
  },
  image: {
    height: 20,
    width: 100,
    resizeMode: "contain",
  },
  sideIcons: {
    marginTop: 30,
    flexDirection: "row",
    gap: 15,
  },
  headerScroll: {
    // backgroundColor: "grey",
    height:25,
    flexDirection:"row",
    paddingHorizontal:10,
  },
  scrollItem:{
    backgroundColor: "white", 
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin:5,
    marginHorizontal: 5, 
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollText: {
    fontSize: 14,
    fontWeight: "bold",
  },

});

export default Header;

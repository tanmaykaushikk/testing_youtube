import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import React from "react";

const MainBody = () => {
  const images = Array(10).fill(require("../assets/pexels-therato-3451755.jpg")); 
  const screenWidth = Dimensions.get("window").width; 

  return (
    <ScrollView style={styles.container} testID="scrollview">
      {images.map((imgSrc, index) => (
        <View key={index} style={[styles.imageContainer, { width: screenWidth }]} testID={`imageContainer-${index}`}>
          <Image source={imgSrc} style={styles.image} testID={`mainImage-${index}`}/>
          <View style={styles.textContainer} testID="textContainer">
            <Image source={require("../assets/wallpaperflare.com_wallpaper.jpg")} style={styles.icon} testID="iconImage"/>
            <Text style={styles.description} testID="descriptionText">
              This is aurora
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MainBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0, 
  },
  imageContainer: {
    height: 280, 
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20, 
  },
  image: {
    height: 220, 
    width: "100%",
    resizeMode: "cover", 
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center", 
    marginTop: 10, 
    paddingHorizontal: 10,
  },
  icon: {
    height: 50,
    width: 100, 
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

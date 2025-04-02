import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import React from "react";

const MainBody = () => {
  const screenWidth = Dimensions.get("window").width;

  const imageData = [
    {
      image: require("../assets/images/26724683-30cc-4c5f-b757-b18500bc5041_1024.jpeg"),
      icon: require("../assets/images/pexels-therato-3451755.jpg"),
      description: "Beautiful mountain view",
    },
    {
      image: require("../assets/images/beyond space.jpg"),
      icon: require("../assets/images/pexels-therato-3451755.jpg"),
      description: "Serene lakeside sunset",
    },
    {
      image: require("../assets/images/astropurple.jpg"),
      icon: require("../assets/images/pexels-therato-3451755.jpg"),
      description: "Lush green forest",
    },
    {
      image: require("../assets/images/pexels-therato-3451755.jpg"),
      icon: require("../assets/images/pexels-therato-3451755.jpg"),
      description: "Snow-covered peaks",
    },
    {
      image: require("../assets/images/galaxy.jpg"),
      icon: require("../assets/images/pexels-therato-3451755.jpg"),
      description: "Golden desert dunes",
    },
  ];

  return (
    <ScrollView style={styles.container} testID="scrollview">
      {imageData.map((item, index) => (
        <View key={index} style={[styles.imageContainer, { width: screenWidth }]} testID={`imageContainer-${index}`}>
          <Image source={item.image} style={styles.image} testID={`mainImage-${index}`} />
          <View style={styles.textContainer} testID={`textContainer-${index}`}>
            <Image source={item.icon} style={styles.icon} testID={`iconImage-${index}`} />
            <Text style={styles.description} testID={`descriptionText-${index}`}>
              {item.description}
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
    backgroundColor:"red",
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
    width:"100%",
    backgroundColor:"pink",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  icon: {
    height: 50,
    width: 50, 
    resizeMode: "contain",
    borderRadius:50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

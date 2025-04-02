import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


type FooterProps = {
  onPress?: (icon: string) => void;
};

const Footer: React.FC<FooterProps> = ({ onPress}:any) => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity testID="footer-home-btn" onPress={() => onPress?.("home")}>
          <View testID="footer-home-icon">
            <MaterialIcons name="home" size={30} />
          </View>
          <Text testID="footer-home-text">Home</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity testID="footer-shorts-btn" onPress={() => Navigation.navigate("shorts")}>
          <View testID="footer-shorts-icon">
            <MaterialIcons name="play-circle-outline" size={30} style={{ marginLeft: 5 }} />
          </View>
          <Text testID="footer-shorts-text">Shorts</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity testID="footer-add-btn" onPress={() => onPress?.("add")}>
          <View testID="footer-add-icon">
            <MaterialIcons name="add-circle" size={30} style={{ marginLeft: 20 }} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity testID="footer-subscriptions-btn" onPress={() => onPress?.("subscriptions")}>
          <View testID="footer-subscriptions-icon">
            <MaterialIcons name="subscriptions" size={30} style={{ marginLeft: 25 }} />
          </View>
          <Text testID="footer-subscriptions-text">Subscriptions</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity testID="footer-profile-btn" onPress={() => onPress?.("profile")}>
          <View testID="footer-profile-icon">
            <MaterialIcons name="person" size={30} />
          </View>
          <Text testID="footer-profile-text">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

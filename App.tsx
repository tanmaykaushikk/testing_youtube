import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/Navigation/Navigation";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

export default App;

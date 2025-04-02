import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Footer from '../components/Footer';
import Shorts from '../screens/Shorts';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <View testID="navigation-container">
      <NavigationContainer>
          <Stack.Navigator id={undefined}>
              <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
              <Stack.Screen name='footer' component={Footer} options={{ headerShown: false }} />
              <Stack.Screen name='shorts' component={Shorts} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
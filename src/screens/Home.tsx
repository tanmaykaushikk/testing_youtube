import { View } from 'react-native';
import React, { Component } from 'react';
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <View testID="home-container">
        <View testID="header-container">
          <Header />
        </View>
        <View testID="mainbody-container" style={{ height: '78%' }}>
          <MainBody />
        </View>
        <View testID="footer-container">
          <Footer />
        </View>
      </View>
    );
  }
}
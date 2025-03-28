import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import MainBody from './src/components/MainBody';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <MainBody/>
      <Footer/>

      </>
    );
  }
}

export default App;
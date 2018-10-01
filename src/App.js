import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtjRrKMTrc5nVHCLyuxb_K755oVCeRYYU',
      authDomain: 'burn-my-fat.firebaseapp.com',
      databaseURL: 'https://burn-my-fat.firebaseio.com',
      projectId: 'burn-my-fat',
      storageBucket: 'burn-my-fat.appspot.com',
      messagingSenderId: '983341824895'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;

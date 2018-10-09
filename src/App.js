import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtjRrKMTrc5nVHCLyuxb_K755oVCeRYYU',
      authDomain: 'burn-my-fat.firebaseapp.com',
      databaseURL: 'https://burn-my-fat.firebaseio.com',
      projectId: 'burn-my-fat',
      storageBucket: 'burn-my-fat.appspot.com',
      messagingSenderId: '983341824895'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

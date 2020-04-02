import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import * as GoogleAuth from 'expo-google-app-auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQZ_rQyizYTszqDkScFxkC12cuGIO-3Us",
  authDomain: "test-25d80.firebaseapp.com",
  databaseURL: "https://test-25d80.firebaseio.com",
  projectId: "test-25d80",
  storageBucket: "test-25d80.appspot.com",
  messagingSenderId: "343362234169",
  appId: "1:343362234169:web:93b59f9b087cc60706eae8",
  measurementId: "G-M91KMXJXR4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {

  componentDidMount() {
 
    

  }
  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '327252475600-6pgha528euqk5tqgr0al5qet77q9qc1u.apps.googleusercontent.com',
    });
    this._syncUserWithStateAsync();
  };

signInWithGoogleAsync = async () => {
  
    try {
      const result = await GoogleAuth.logInAsync({
        androidClientId: "327252475600-3btv30bdsd6p5eho5n7lr6mce8r8mkvt.apps.googleusercontent.com",
        iosClientId: "327252475600-e4at9geu6irjhravand7f4c4p6dkvlld.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });
 
      if (result.type === 'success') {
        console.log(result.accessToken)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e)
      return { error: true };
    }
  }

render() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text onPress={() => this.signInWithGoogleAsync()}>Click</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

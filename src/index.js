import React, { Component } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends Component {
  getUserLocationHandler = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'HouseMaps Location Permission',
          message: 'Your location helps us find nearby properties'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          position => {
            // Successfully got the position in this block
            console.log(position);
          },
          err => console.log(err)
        );
      } else {
        console.log('Permission refused');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
      </View>
    );
  }
}

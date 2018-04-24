import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

const UsersMap = () => (
  <View style={styles.mapContainer}>
    <MapView style={styles.map} />
  </View>
);

export default UsersMap;

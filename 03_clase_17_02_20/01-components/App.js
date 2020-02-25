import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box5}></View>
        <View style={styles.box6}> </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // text: {
  //   color: '#212121'
  // },
  box1: {
    flex: 1,
    backgroundColor: '#b9f6ca',
    flexDirection:'row'
  },
  box2: {
    flex: 1,
    backgroundColor: '#69f0ae',
    flexDirection:'row'
  },
  box3: {
    flex: 1,
    backgroundColor: '#00e676'
  },
  box4: {
    flex: 1,
    backgroundColor: '#00e676'  
  },
  box5: {
    flex: 1,
    backgroundColor: '#00e676'
  },
  box6: {
    flex: 1,
    backgroundColor: '#00e676'
  }

});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header"
import Main from "./Components/Main"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1db954',
  },
});

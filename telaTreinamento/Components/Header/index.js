import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Informações de um artista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#1db954',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 38,
    
  },
  texto: {
    fontSize: 19,
    fontWeight: '500',
  }


});

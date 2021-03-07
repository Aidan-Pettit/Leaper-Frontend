import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function LeaperButton({title, onPress}) {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress} color="white"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'limegreen',
    borderColor: 'darkgreen',
    borderWidth: 2,
    borderRadius: 25
  }
});

export default LeaperButton;
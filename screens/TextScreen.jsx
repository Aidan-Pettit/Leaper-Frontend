import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TextScreen(props) {
  return (
    <View style={styles.container}><Text>Some Text</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default TextScreen;
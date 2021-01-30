import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function LeaperInput(props) {
  return (
    <View style={styles.container}>
        <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '90%',
      height: 40,
      
  }
});

export default LeaperInput;
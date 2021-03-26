import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function SubmitButton({title, onPress}) {
  return (
    <View style={styles.container}>
        <Button title={title} color="white" onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '25%',
      height: 50,
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20,
      backgroundColor: 'limegreen',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 20,
      shadowColor: 'lightgray',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 1
  }
});

export default SubmitButton;
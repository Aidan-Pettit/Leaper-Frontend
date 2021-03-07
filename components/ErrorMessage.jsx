import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ErrorMessage({error}) {
    if (!error) return null
  
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>
                {error}
            </Text>
        </View>
  );
}

const styles = StyleSheet.create({

  errorMessage: {
      color: 'tomato'
  }
});

export default ErrorMessage;
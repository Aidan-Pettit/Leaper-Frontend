import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Login Screen</Text>
        <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default LoginScreen;
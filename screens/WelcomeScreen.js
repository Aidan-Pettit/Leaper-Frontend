import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen'
import LeaperButton from '../components/LeaperButton'
import { Ionicons } from '@expo/vector-icons'

function WelcomeScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/leaper-icon.jpg')}/>

      <LeaperButton title="Login" onPress={() => navigation.navigate("LoginScreen")}/>
      <LeaperButton title="Signup" onPress={() => navigation.navigate("SignupScreen")}/>

      <Button title="Got to text screen" onPress={() => navigation.navigate("TextScreen")}/>

      <Button title="Open Drawer" onPress={() => navigation.openDrawer()}/>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.icon}>
          <Ionicons name="settings-outline" size={60} />
        </View>
      </TouchableOpacity>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'skyblue'
  },

  logo: {
    width: 200,
    height: 200,
    borderColor: 'lime',
    borderWidth: 3,
    borderRadius: 50
  },

  icon: {
    shadowColor: 'grey', 
    shadowOffset: {width: 3, height: 3}, 
    shadowOpacity: 1
  }
});

export default WelcomeScreen;
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import TextScreen from './screens/TextScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export default function App() {

  return (
    <React.Fragment>

    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{title: 'Leaper', headerStyle: {backgroundColor: 'lightgreen'}}}/>
          <Stack.Screen name="TextScreen" component={TextScreen}  options={{title: 'Leaper'}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{title: 'Login'}}/>
          <Stack.Screen name="SignupScreen" component={SignupScreen}  options={{title: 'Signup'}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{title: 'Home'}}/>
        </Stack.Navigator>
    </NavigationContainer>

    {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="WelcomeScreen">
          <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer> */}


    <StatusBar style="auto" />

    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});


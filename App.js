import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './screens/WelcomeScreen'
import TextScreen from './screens/TextScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AccountViewScreen from './screens/AccountViewScreen'
import AuthContext from './auth/AuthContext';


const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setCurrentUser()
  }, [])

  const setCurrentUser = async () => {
    const user = await AsyncStorage.getItem('user')
    console.log(user)
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>

      <NavigationContainer>
          <Stack.Navigator initialRouteName={(user) ? 'HomeScreen' : 'WelcomeScreen'}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{title: 'Leaper', headerStyle: {backgroundColor: 'lightgreen'}}}/>
            <Stack.Screen name="TextScreen" component={TextScreen}  options={{title: 'Leaper'}}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{title: 'Login'}}/>
            <Stack.Screen name="SignupScreen" component={SignupScreen}  options={{title: 'Signup'}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{title: 'Home'}}/>
            <Stack.Screen name="AccountViewScreen" component={AccountViewScreen} options={{title: 'Information'}}/>
          </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
          <Drawer.Navigator initialRouteName="WelcomeScreen">
            <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
          </Drawer.Navigator>
      </NavigationContainer> */}


      <StatusBar style="auto" />

    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});


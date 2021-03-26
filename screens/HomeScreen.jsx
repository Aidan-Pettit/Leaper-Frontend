import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import FeedScreen from './FeedScreen';
import AccountScreen from './AccountScreen';
import CascadeScreen from './CascadeScreen';
import CreatePostScreen from './CreatePostScreen';
import CreateTalkScreen from './CreateTalkScreen';
import ShopScreen from './ShopScreen';
import locationService from '../services/locationService';
import AuthContext from '../auth/AuthContext'


const Tab = createBottomTabNavigator()

function HomeScreen(props) {
  const {user} = useContext(AuthContext)

  useEffect(() => {
    // requestPermissions()
    requestLocationPermissions()
    saveLocation()
  }, [])

  const requestPermissions = async () => {
    // const {granted} = ImagePicker.requestCameraPermissionsAsync()
    // if (!granted) alert('You need to enable camera permissions.')

    // const {granted} = ImagePicker.requestMediaLibraryPermissionsAsync()
    // if (!granted) alert('You need to enable camera roll permissions.')
  }

  const requestLocationPermissions = async () => {
    const result = await Location.requestPermissionsAsync()
    console.log(result)
  }

  const saveLocation = async () => {
    const location = await Location.getLastKnownPositionAsync()
    await locationService.saveLocation(user._id, location.coords.latitude, location.coords.longitude)
  }

  return (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'royalblue',
            activeTintColor: 'white',
            inactiveBackgroundColor: 'lightgray',
            inactiveTintColor: 'black'
        }}>
        
        <Tab.Screen name="CascadeScreen" component={CascadeScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="image-area-close" size={30} color={color}/>, title: 'Cascade'}}/>

        <Tab.Screen name="FeedScreen" component={FeedScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="image-multiple-outline" size={30} color={color}/>, title: 'Feed'}}/>

        <Tab.Screen name="CreatePostScreen" component={CreatePostScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="camera-plus-outline" size={30} color={color}/>, title: 'Create Post'}}/>

        <Tab.Screen name="ShopScreen" component={ShopScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="store" size={30} color={color}/>, title: 'Shop'}}/>

        <Tab.Screen name="CreateTalkScreen" component={CreateTalkScreen} options={{tabBarIcon: ({color}) => 
        <SimpleLineIcons style={styles.icon} name="speech" size={30} color={color}/>, title: 'Create Talk'}}/>

        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="account-circle-outline" size={30} color={color}/>, title: 'Account Info'}}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    shadowColor: 'grey', 
    shadowOffset: {width: 2, height: 2}, 
    shadowOpacity: 1
  }
});

export default HomeScreen;
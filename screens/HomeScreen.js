import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import FeedScreen from './FeedScreen';
import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator()

function HomeScreen(props) {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'royalblue',
            activeTintColor: 'white',
            inactiveBackgroundColor: 'lightgray',
            inactiveTintColor: 'black'
        }}
    >
        <Tab.Screen name="FeedScreen" component={FeedScreen} options={{tabBarIcon: ({color}) => <MaterialCommunityIcons name="image-multiple-outline" size={30} color={color}/>}}/>
        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-circle" size={30} color={color}/>}}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;
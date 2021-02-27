import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import FeedScreen from './FeedScreen';
import AccountScreen from './AccountScreen';
import CascadeScreen from './CascadeScreen';

const Tab = createBottomTabNavigator()

function HomeScreen(props) {
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

        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{tabBarIcon: ({color}) => 
        <MaterialCommunityIcons style={styles.icon} name="account-circle" size={30} color={color}/>, title: 'Account Info'}}/>

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
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native';
import Screen from '../components/Screen.js';
import { Ionicons } from '@expo/vector-icons';
import SettingsItem from '../components/SettingsItem';

function SettingsScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Screen style={styles.container}>
        <Text>Settings</Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={styles.icon}>
            <Ionicons name="settings-outline" size={60} />
          </View>
      </TouchableOpacity>

      <SettingsItem title="Blue Switch">
        <Switch value={isEnabled} onValueChange={newValue => {setIsEnabled(newValue)}} trackColor={{true: 'blue'}}/>
      </SettingsItem>

      <SettingsItem title="Dark Mode">
          <Switch value={isDarkMode} onValueChange={newValue => {setIsDarkMode(newValue)}} thumbColor={isDarkMode ? 'lightgray' : 'black'} trackColor={{true: 'black'}} />
      </SettingsItem>

    </Screen>
  );
}

const styles = StyleSheet.create({
  icon: {
    shadowColor: 'gray', 
    shadowOffset: {width: 3, height: 3}, 
    shadowOpacity: 1
  }
});

export default SettingsScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SettingsItem({title, children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.settingItemText}>{title}</Text>
        <View style={styles.settingItem}>
          {children}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      borderColor: 'lightgray',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      padding: 5,
      paddingRight: 20,
      paddingBottom: 10
  },

  settingItem: {
    alignItems: 'flex-end'
  },

  settingItemText: {
    fontSize: 20,
    color: 'gray'
  }
});

export default SettingsItem;
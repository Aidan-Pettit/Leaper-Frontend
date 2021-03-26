import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

function StatDisplay({text, iconName, size, color}) {
  return (
    <View style={styles.container}>
        <Text style={{paddingRight: 5, fontSize: size, color: color}}>{text}</Text>
        <MaterialCommunityIcons name={iconName} size={size} color={color}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'mintcream',
      padding: 5,
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 15,
      borderColor: 'green',
      borderWidth: 2,
      borderRadius: 20,
      shadowColor: 'gray',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.5
  }
});

export default StatDisplay;
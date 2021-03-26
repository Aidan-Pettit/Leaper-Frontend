import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AccountPicture from './AccountPicture';
import StatDisplay from './StatDisplay';

function AccountTab({accountPictureURL, username, leapscore, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <AccountPicture accountPictureURL={accountPictureURL} size={50} borderColor="green" />
                
            <Text style={styles.text}>{username}</Text>

            <View style={{justifyContent: ''}}>
                <StatDisplay text={leapscore} iconName="star-four-points" size={25} color="green"/>
            </View>
        </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row', 
      alignItems: 'center',
      backgroundColor: 'mintcream',
      padding: 20,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1
  },

  text: {
      fontSize: 20,
      paddingLeft: 20
  }
});

export default AccountTab;
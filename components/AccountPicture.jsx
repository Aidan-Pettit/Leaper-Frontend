import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function AccountPicture({accountPictureURL, size, borderColor}) {
  const borderRadius = 0.3 * size

  return (
    <View styles={styles.container}>
        {accountPictureURL && <Image style={{
        height: size,
        width: size,
        padding: 20, 
        borderColor: borderColor,
        borderWidth: 2,
        borderRadius: borderRadius }} source={{uri: accountPictureURL}}/>}

        {!accountPictureURL && <Image style={{
        height: size,
        width: size,
        padding: 20, 
        borderColor: borderColor,
        borderWidth: 2,
        borderRadius: borderRadius }} source={require('../assets/images/leaper-icon.jpg')}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10, 
    shadowColor: 'gray',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5
  }
});

export default AccountPicture;
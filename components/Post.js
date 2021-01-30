import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LikeButton from '../components/LikeButton'
import LoveButton from '../components/LoveButton'

function Post(props) {
  return (
    <View style={styles.postContainer}>
        <Image style={styles.image} source={require('../assets/sunset.jpeg')} />
        <View style={styles.buttonsContainer}>
            <LikeButton />
            <LoveButton />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
      flex: 3,
      borderWidth: 5,
      borderColor: 'green',
      borderRadius: 25
  },

  image: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 15
  },

  buttonsContainer: {
      flex: 1,
  }
});

export default Post;
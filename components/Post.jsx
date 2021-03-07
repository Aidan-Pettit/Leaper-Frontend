import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LikeButton from './LikeButton'
import LoveButton from './LoveButton'

function Post({imageURL}) {
  const [likes, setLikes] = useState(0)
  const [loves, setLoves] = useState(0)

  

  return (
      <View style={styles.postContainer}>
        <View>
          <Image style={styles.image} source={{uri: imageURL}}/>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => setLikes(likes + 1)}>
            <LikeButton/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLoves(loves + 1)}>
            <LoveButton />
          </TouchableOpacity>
        </View>


        <Text>Number of likes: {likes}</Text>
        <Text>Number of loves: {loves}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
      flex: 1,
      alignItems: 'center'
  },

  image: {
    width: 400,
    height: 300,
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 15
  },

  buttonsContainer: {
    flexDirection: 'row'
  }
});

export default Post;
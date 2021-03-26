import React, { useState, useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Post from '../components/Post'
import postService from '../services/postService'
import AuthContext from '../auth/AuthContext'

function CreatePostScreen(props) {
    const {user} = useContext(AuthContext)

    const [image, setImage] = useState()

    const getPictureFromLibrary = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync()
            setImage(result)
        } catch (error) {
            console.log('Error getting image from library...', error)
        }
    }

    const takeNewPicture = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync()
            setImage(result)
        } catch (error) {
            console.log('Error taking new photo...', error)
        }
    }

  return (
    <View style={styles.container}>
        <Text>Create a New Post</Text>

        <Button title="Get picture from camera roll." onPress={getPictureFromLibrary}/>

        <Button title="Take a new picture." onPress={takeNewPicture}/>

        {/* <Image style={styles.image} source={{ uri: image }}/> */}

        {image && <Post imageURL={image.uri}/>}

        <Button title="Create New Post" onPress={() => postService.addNewPost(user._id, image.base64)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },

  image: {
      height: 150,
      width: 150
  }
});

export default CreatePostScreen;
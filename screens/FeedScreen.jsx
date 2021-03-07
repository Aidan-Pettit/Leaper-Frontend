import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import Post from '../components/Post'
import LikeButton from '../components/LikeButton'
import axios from '../services/axios'

function FeedScreen(props) {
  const [photos, setPhotos] = useState([])

  const loadPhotos = async () => {
    const response = await axios.getPhotos()
    setPhotos(response)
  }

  useEffect(() => {
    loadPhotos()
  }, [])

  return (
    <View style={styles.container}>
        
        <FlatList 
        data={photos.data}
        renderItem={({item}) => <Post imageURL={item.url}/>}
        keyExtractor={photo => photo.id.toString()}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkturquoise'
  },

  image: {
    width: '100%',
    height: 400
  }
});

export default FeedScreen;
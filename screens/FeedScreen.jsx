import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import AuthContext from '../auth/AuthContext'
import Post from '../components/Post'
import LikeButton from '../components/LikeButton'
import axios from '../services/axios'
import Talk from '../components/Talk'
import talkService from '../services/talkService'
import feedService from '../services/feedService'

function FeedScreen(props) {
  const [talks, setTalks] = useState([])

  const {user} = useContext(AuthContext)

  const loadFeed = async () => {
    console.log(user)
    const response = await feedService.getTalkFeed(user._id)
    console.log(response)
    setTalks(response)
  }

  useEffect(() => {
    loadFeed()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
      data={talks}
      keyExtractor={talk => talk._id.toString()}
      renderItem={({item}) => <Talk title={item.title} body={item.body} id={item._id} likes={item.likedUsers} loves={item.lovedUsers} privacyLevel={item.privacyLevel} currentUser={user}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  },

  image: {
    width: '100%',
    height: 400
  }
});

export default FeedScreen;
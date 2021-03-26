import React, {useState, useEffect, useContext} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LikeButton from './LikeButton'
import LoveButton from './LoveButton'
import leapscoreService from '../services/leapscoreService'

function Talk({title, body, id, currentUser, likes, loves, privacyLevel}) {
  const [user, setUser] = useState(currentUser)
  const [newLikes, setNewLikes] = useState(likes.length)
  const [newLoves, setNewLoves] = useState(loves.length)
  const [isLiked, setIsLiked] = useState(likes.includes(user._id))
  const [isLoved, setIsLoved] = useState(loves.includes(user._id))
  const [isPublic, setIsPublic] = useState(false)
  const [isWatchers, setIsWatchers] = useState(false)
  const [isFriends, setIsFriends] = useState(false)
  
  useEffect(() => {
    setIsPublic(privacyLevel === 'public')
    setIsWatchers(privacyLevel === 'watchers')
    setIsFriends(privacyLevel === 'friends')
  }, [])

  const likeTalk = async () => {
    const result = await leapscoreService.like(user._id, id) 
    console.log(result)
    const sum = isLiked ? -1 : 1
    setNewLikes(newLikes + sum)
    setIsLiked(!isLiked)
  }

  const loveTalk = async () => {
    const result = await leapscoreService.love(user._id, id)
    console.log(result)
    const sum = isLoved ? -1 : 1
    setNewLoves(newLoves + sum)
    setIsLoved(!isLoved)
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={() => likeTalk()} onLongPress={() => loveTalk()}>
      <View style={styles.container}>

      <View style={styles.title}>
        <Text style={{fontSize: 30}}>{title}</Text>
      </View>

      <View style={styles.body}>
        <Text>{body}</Text>
      </View>
      </View>
    </TouchableWithoutFeedback>

    <View style={styles.buttonContainer}>
      <LikeButton />
      <Text style={{fontSize: 20, marginRight: 50}}>{newLikes}</Text>

      <LoveButton />
      <Text style={{fontSize: 20}}>{newLoves}</Text>
    </View> 
    
    {isPublic && <Text>Public</Text>}
    {isWatchers && <Text>Watchers</Text>}
    {isFriends && <Text>Friends</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'mintcream',
    borderWidth: 2, 
    borderColor: 'green',
    borderRadius: 25,
    margin: 15,
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.6
  },

  title: {
    
  },

  body: {
    height: 100
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 20
  }
});

export default Talk;
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, Image, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AuthContext from '../auth/AuthContext'
import Post from '../components/Post'
import StatDisplay from '../components/StatDisplay'
import AccountTab from '../components/AccountTab'
import userService from '../services/userService'
import friendService from '../services/friendService'


function AccountViewScreen({route: {params: {username, leapscore, posts, watchers, _id, accountPicture, backgroundHeader}}, navigation}) {
  const [arePostsVisible, setArePoststVisible] = useState(true)
  const [areWatchersVisible, setAreWatcherstVisible] = useState(false)
  const [watcherUsers, setWatcherUsers] = useState([])
  const [isWatching, setIsWatching] = useState()
  
  const {user} = useContext(AuthContext)


  useEffect(() => {
    loadUsers()
    console.log(user)
  }, [])


  const loadUsers = async () => {
    try {
      const result =  await userService.getUsersByIDS(watchers)
      setWatcherUsers(result)
    } catch (error) {
      console.log('There was an error getting the users...', error)
    }
  }

  const watchUser = async () => {
    try {
      const result = await userService.watchUser(user._id, _id)
      setIsWatching(!isWatching)
      console.log(result)
    } catch (error) {
      console.log('There was an issue watching a user...', error)
    }
  }

  const sendFriendRequest = async friendUserID => {
    const result = await friendService.sendFriendRequest(user._id, friendUserID)
    console.log(result)
  }
  

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: backgroundHeader}} style={styles.backgroundHeader}>

        <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
          <TouchableOpacity onPress={() => {
            setAreWatcherstVisible(false)
            setArePoststVisible(true)
          }}>
            <StatDisplay text={posts.length} iconName="image" size={20}/>
          </TouchableOpacity>
          
          {accountPicture && <Image style={styles.accountPicture} source={{width: 100, height: 100, uri: accountPicture}}/>}
          {!accountPicture && <Image style={styles.accountPicture} source={require('../assets/images/leaper-icon.jpg')}/>}
          
          <TouchableOpacity onPress={() => {
            setArePoststVisible(false)
            setAreWatcherstVisible(true)
          }}>
            <StatDisplay text={watchers.length} iconName="eye" size={20}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
            <TouchableOpacity onPress={watchUser}>
              <StatDisplay text={isWatching ? 'Watching' : 'Watch'} color={isWatching ? 'green' : 'black'} size={20}/>
            </TouchableOpacity>

          <StatDisplay text={username} size={20}/>

            <TouchableOpacity onPress={sendFriendRequest}>
              <StatDisplay text="Friend" color={isWatching ? 'green' : 'black'} size={20}/>
            </TouchableOpacity>
        </View>

        <StatDisplay text={leapscore} iconName="star-four-points" color='green' size={40}/>
      </ImageBackground>

      {posts && arePostsVisible && <FlatList 
        data={posts}
        renderItem={({item}) => <Post imageURL={item} userID={_id}/>}
        keyExtractor={post => post.toString()}
            />}

      {watchers && areWatchersVisible && <FlatList 
        data={watcherUsers}
        renderItem={({item}) => <AccountTab username={item.username} leapscore={item.leapscore} accountPictureURL={item.accountPicture} onPress={() => navigation.navigate('AccountViewScreen', item)}/>}
        keyExtractor={user => user._id.toString()}
            />}
      
      {!posts && <Text>This user has no posts yet.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'mintcream'
  },

  textContainer: {
    alignItems: 'center',
    paddingTop: 70
  },

  text: {
    padding: 5,
    color: 'skyblue',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {height: 0, width: 0},
    shadowOpacity: 1
  },

  usernameText: {
    padding: 5,
    color: 'green',
    fontSize: 20
  },


  leapscoreText: {
    padding: 5,
    color: 'green',
    fontSize: 35
  },

  accountPicture: {
    width: 130,
    height: 130,
    borderWidth: 2, 
    borderColor: 'skyblue',
    borderRadius: 40,
    marginTop: 20
  },

  backgroundHeader: {
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2, 
    borderBottomColor: 'skyblue'
  }
});

export default AccountViewScreen;
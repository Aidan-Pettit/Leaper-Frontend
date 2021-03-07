import React from 'react';
import { View, Text, Image, ImageBackground, FlatList, StyleSheet } from 'react-native';
import Post from '../components/Post'
import StatDisplay from '../components/StatDisplay'

function AccountViewScreen({route: {params: {username, leapscore, posts, watchers, accountPicture, backgroundHeader}}}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: backgroundHeader}} style={styles.backgroundHeader}>

        <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
          <StatDisplay text={watchers.length} iconName="eye" size={20}/>
          {accountPicture && <Image style={styles.accountPicture} source={{width: 100, height: 100, uri: accountPicture}}/>}
          {!accountPicture && <Image style={styles.accountPicture} source={require('../assets/leaper-icon.jpg')}/>}
          <StatDisplay text={posts.length} iconName="image" size={20}/>
        </View>

        <StatDisplay text={username} size={20}/>
        <StatDisplay text={leapscore} iconName="star-four-points" color='limegreen' size={40}/>
      </ImageBackground>

      {posts && <FlatList 
        data={posts}
        renderItem={({item}) => <Post imageURL={item}/>}
        keyExtractor={post => post.toString()}
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
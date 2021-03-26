import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import userService from '../services/axios'
import AuthContext from '../auth/AuthContext'
import AccountPicture from '../components/AccountPicture'
import friendService from '../services/friendService'

function CascadeScreen(props) {
  const [friendRequests, setFriendRequests] = useState([])

  const {user} = useContext(AuthContext)

  useEffect(() => {
    // setFriendRequests(user.friendRequests)
  }, [])

  const acceptFriendRequest = async friendUserID => {
    const result = await friendService.acceptFriendRequest(user._id, friendUserID)
    console.log(result)
  }


  return (
    <>
    <View style={styles.container}>
        {/* <Text style={styles.title}>Cascade Screen</Text> */}
        
        {user && <Text style={styles.title}>Current User:</Text>}
        {user && <Text style={styles.text}>{user.username}</Text>}
        {user && <AccountPicture accountPictureURL={user.accountPicture} size={150}/>}
    </View>

    <View>
      {/* <FlatList 
      data={friendRequests}
      keyExtractor={item.toString}
      
      /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20
  },

  title: {
    fontSize: 50
  },

  text: {
    fontSize: 50,
    color: 'green'
  }
});

export default CascadeScreen;
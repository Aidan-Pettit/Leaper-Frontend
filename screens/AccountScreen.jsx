import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import AccountTab from '../components/AccountTab';
import axios from '../services/axios'


function AccountScreen({navigation}) {
  const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
      const response = await axios.getUsers()
      setUsers(response)
  }

  return (
    <View style={styles.container}>
      
        <FlatList 
        data={users.data} 
        renderItem={({item: user}) => <AccountTab accountPictureURL={user.accountPicture} username={user.username} leapscore={user.leapscore} onPress={() => navigation.navigate('AccountViewScreen', user)}/>}
        keyExtractor={user => user._id.toString()}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'mintcream'
  }
});

export default AccountScreen;
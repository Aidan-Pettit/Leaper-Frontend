import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
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
        renderItem={({item}) => <Button title={item.name} onPress={() => navigation.navigate('AccountViewScreen', item)}/>}
        keyExtractor={user => user.id.toString()}
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
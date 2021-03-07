import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import userService from '../services/axios'

function CascadeScreen(props) {
    const [data, setData] = useState([])

    useEffect(() => {
      loadUsers()
    }, [])
    
    const loadUsers = async () => {
      const users = await userService.getUsers()
      setData(users.data)
      console.log(data)
    }

  return (
    <View style={styles.container}>
        <Text>Cascade Screen</Text>
        <FlatList 
        data={data}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => <Text>{item.username}</Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CascadeScreen;
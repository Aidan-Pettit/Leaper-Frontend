import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import coursesApi from '../services/courses'
import axios from '../services/axios'

function CourseList(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        // const response = await coursesApi.getCourses()
        // setUsers(response)
        axios.getUsers()
    }

  return (
    <View style={styles.container}>
        <FlatList 
        data={users.data}
        renderItem={({item}) => <Text>{item.phone}</Text>}
        keyExtractor={user => user.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CourseList;
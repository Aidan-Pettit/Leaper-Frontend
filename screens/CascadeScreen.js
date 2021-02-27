import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

function CascadeScreen(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData([1, 2, 3])
    }, [])

  return (
    <View style={styles.container}>
        <Text>Cascade Screen</Text>
        <FlatList 
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <Text>{item}</Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CascadeScreen;
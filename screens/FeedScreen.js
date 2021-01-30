import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Post from '../components/Post'

function FeedScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Feed Screen</Text>
        <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FeedScreen;
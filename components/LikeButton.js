import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

function LikeButton(props) {
    const [isLiked, setIsLiked] = useState(false)

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => setIsLiked(!isLiked)}>
        <View style={styles.container}>
            <AntDesign name={isLiked ? 'like1' : 'like2'} size={40} color="yellow"/>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    touchable: {
        width: 70
      }
});

export default LikeButton;
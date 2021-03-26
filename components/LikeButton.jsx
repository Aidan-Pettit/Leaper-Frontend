import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function LikeButton(props) {
    const [isLiked, setIsLiked] = useState(false)

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => setIsLiked(!isLiked)}>
        <View style={styles.container}>
            <AntDesign name={isLiked ? 'like1' : 'like2'} size={40} color="#f0e94f"/>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    touchable: {
        width: 50
      }
});

export default LikeButton;
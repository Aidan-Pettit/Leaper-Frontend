import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LoveButton(props) {
    const [isLoved, setIsLoved] = useState(false);

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => setIsLoved(!isLoved)}>
        <View style={styles.container}>
            <Ionicons name={isLoved ? 'heart-sharp' : 'heart-outline'} size={50} color="deeppink"/>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: 50
  }
});

export default LoveButton;
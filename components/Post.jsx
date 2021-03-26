import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import LikeButton from './LikeButton';
import LoveButton from './LoveButton';
import leapscoreService from '../services/leapscoreService';

function Post({imageURL, userID}) {
  const [likes, setLikes] = useState(0)
  const [loves, setLoves] = useState(0)  
  const [isLiked, setIsLiked] = useState(false)
  const [isLoved, setIsLoved] = useState(false)
  const [isLikeAnimationActive, setIsLikeAnimationActive] = useState(false)
  const [isLoveAnimationActive, setIsLoveAnimationActive] = useState(false)

  const like = async () => {
    
    setIsLikeAnimationActive(true)
    setIsLiked(!isLiked)
    console.log(isLiked)
    
    if (isLoved) setIsLoved(false)
    const response = await leapscoreService.like(userID, isLiked)
    console.log(response)
    console.log(isLiked)

    setTimeout(() => {
      setIsLikeAnimationActive(false)
    }, 1300)
  }

  const love = async () => {
    setIsLoveAnimationActive(true)
    setIsLoved(!isLoved)
    if (isLiked) setIsLiked(false)

    setTimeout(() => {
      setIsLoveAnimationActive(false)
    }, 1300)
  }

  return (
      <View style={styles.postContainer}>
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback onPress={like} onLongPress={love}>
            <View>
              <Image style={styles.image} source={{uri: imageURL}}/>

              {isLikeAnimationActive && isLiked && <LottieView 
              source={require('../assets/animations/like-animation.json')}
              autoPlay
              loop={false}
              />}

              {isLoveAnimationActive && isLoved && <LottieView 
              source={require('../assets/animations/love-animation.json')}
              autoPlay
              loop={false}
              />}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => setLikes(likes + 1)}>
            <LikeButton/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLoves(loves + 1)}>
            <LoveButton />
          </TouchableOpacity>
        </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
      flex: 1,
      alignItems: 'center'
  },

  image: {
    width: 400,
    height: 300,
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 15
  },

  imageContainer: {
    shadowColor: 'gray',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8
  },

  buttonsContainer: {
    flexDirection: 'row'
  }
});

export default Post;
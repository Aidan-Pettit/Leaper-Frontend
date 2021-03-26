import React, { useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LeaperInput from '../components/LeaperInput';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';
import userService from '../services/userService';

const schema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20).label('Username'),
  password: Yup.string().required().min(8).max(30).label('Password'),
  email: Yup.string().email().label('Email')
})

function SignupScreen({navigation}) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSubmit = async userInfo => {
    try {
      setIsAnimating(true)
      const result = await userService.postUser(userInfo)
      console.log(result)
      navigation.navigate("HomeScreen")
      setIsAnimating(false)
    } catch (error) {
      console.log('Signup failed...', error)
    }
  }

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/images/leaper-icon.jpg')}/>

      <Formik initialValues={{username: '', password: '', email: ''}} onSubmit={values => handleSubmit(values)} validationSchema={schema}>
        {({handleChange, handleSubmit, errors}) => (
        <React.Fragment>

          <LeaperInput placeholder="Username" autoFocus={true} onChangeText={handleChange('username')}/>
          <ErrorMessage error={errors.username}/>

          <LeaperInput placeholder="Password" onChangeText={handleChange('password')}/>
          <ErrorMessage error={errors.password}/>

          <LeaperInput placeholder="Email" keyboardType="email-address" onChangeText={handleChange('email')}/>
          <ErrorMessage error={errors.email}/>
          
          <View style={{width: '100%', alignItems: 'center', margin: 10}}>
            <SubmitButton title="Signup" onPress={handleSubmit}/>
            <ActivityIndicator style={{padding: 20}} animating={isAnimating} size="large"/>
          </View>
          
        </React.Fragment>
        )}
      </Formik>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  logo: {
    width: 200,
    height: 200,
    borderColor: 'lime',
    borderWidth: 3,
    borderRadius: 50,
    margin: 20
  }
});

export default SignupScreen;
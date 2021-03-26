import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';
import LeaperInput from '../components/LeaperInput';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';
import authService from '../services/authService';
import AuthContext from '../auth/AuthContext';

const schema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20).label('Username'),
  password: Yup.string().required().min(3).max(30).label('Password')
})

function LoginScreen({navigation}) {
  const [isAnimating, setIsAnimating] = useState(false)

  const authContext = useContext(AuthContext)

  const handleSubmit = async userInfo => {
    try {
      setIsAnimating(true)
      const result = await authService.authUser(userInfo)
      const user = jwtDecode(result)

      authContext.setUser(user)
      await AsyncStorage.setItem('user', JSON.stringify(user))
      console.log(user)

      navigation.navigate("HomeScreen")
      setIsAnimating(false)
    } catch (error) {
      alert("Incorrect username or password.")
      console.log('Login failed...', error)
    }
  }

  return (
    <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/images/leaper-icon.jpg')}/>

        <Formik initialValues={{username: '', password: ''}} onSubmit={values => handleSubmit(values)} validationSchema={schema}>
          {({handleChange, handleSubmit, errors}) => (
            <React.Fragment>

              <LeaperInput autoFocus={true} placeholder="Username" onChangeText={handleChange('username')}/>
              <ErrorMessage error={errors.username}/>

              <LeaperInput placeholder="Password" onChangeText={handleChange('password')}/>
              <ErrorMessage error={errors.password}/>

              <View style={{width: '100%', alignItems: 'center'}}>
                <SubmitButton title="Login" onPress={handleSubmit}/>
                <ActivityIndicator style={{margin: 10}} animating={isAnimating} size="large"/>
              </View>

            </React.Fragment>
          )}
        </Formik>

        <Button title="Home" onPress={() => navigation.navigate("HomeScreen")}/>

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

export default LoginScreen;
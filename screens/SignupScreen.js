import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LeaperInput from '../components/LeaperInput';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';

const schema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20).label('Username'),
  password: Yup.string().required().min(8).max(30).label('Password'),
  email: Yup.string().email().label('Email')
})

function SignupScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/leaper-icon.jpg')}/>

      <Formik initialValues={{username: '', password: '', email: ''}} onSubmit={values => console.log(values)} validationSchema={schema}>
        {({handleChange, handleSubmit, errors}) => (
        <React.Fragment>

          <LeaperInput placeholder="Username" autoFocus={true} onChangeText={handleChange('username')}/>
          <ErrorMessage error={errors.username}/>

          <LeaperInput placeholder="Password" onChangeText={handleChange('password')}/>
          <ErrorMessage error={errors.password}/>

          <LeaperInput placeholder="Email" keyboardType="email-address" onChangeText={handleChange('email')}/>
          <ErrorMessage error={errors.email}/>

          <SubmitButton title="Signup" onPress={handleSubmit}/>
          
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
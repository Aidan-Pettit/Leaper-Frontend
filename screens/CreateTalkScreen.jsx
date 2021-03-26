import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../auth/AuthContext'
import LeaperInput from '../components/LeaperInput';
import talkService from '../services/talkService'

function CreateTalkScreen(props) {
  const currentUser = useContext(AuthContext)

  const handleSubmit = async values => {
    console.log(values)
    console.log(currentUser.user._id)
    await talkService.createTalk(currentUser.user._id, values)
  }

  return (
    <View style={styles.container}>
      <Text>Talk Screen</Text>

      <Formik initialValues={{title: '', body: ''}} onSubmit={values => handleSubmit(values)}>
      {({handleChange, handleSubmit, errors}) => (
        <>
          <LeaperInput placeholder="Title" autoFocus onChangeText={handleChange('title')}/>

          <LeaperInput placeholder="Body" onChangeText={handleChange('body')}/>
          
          <Button title="Create Talk" onPress={handleSubmit}/>
        </>
      )}
      </Formik>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CreateTalkScreen;
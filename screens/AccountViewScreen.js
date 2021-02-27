import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AccountViewScreen({route: {params: {id, name, email, phone, company}}}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Id: {id}</Text>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Phone: {phone}</Text>
        <Text style={styles.text}>Company: {company.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'mintcream'
  },

  textContainer: {
    alignItems: 'center',
    paddingTop: 70
  },

  text: {
    padding: 10,
    color: 'royalblue',
    fontSize: 20
  }
});

export default AccountViewScreen;
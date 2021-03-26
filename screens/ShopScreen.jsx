import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, Button, Text, Modal } from 'react-native';
import { Formik } from 'formik';
import LeaperInput from '../components/LeaperInput';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton'
import AuthContext from '../auth/AuthContext'
import creditService from '../services/creditService'
import tokenService from '../services/tokenService'


function ShopScreen(props) {
    const [credit, setCredit] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);

    const {user} = useContext(AuthContext)

  useEffect(() => {
    getUserCredit()
  }, [])
  
  const getUserCredit = async () => {
    const transactions = await creditService.getUserCredit(user._id)
    let creditSum = 0

    for (let item of transactions)
    creditSum += item.creditChange
    
    setCredit(creditSum)
  }
  
  const purchaseCredit = async (value, price) => {
    const result = await creditService.buyCredit(user._id, value, price)
    console.log(result)
  }

  const purchaseToken = async value => {
      const newCredit= credit - value
      if (newCredit < 0) return alert("You don't have enough credit!")
      else {
        const result = await tokenService.buyToken(user._id, value)
        console.log(result)
      }
      
      setCredit(credit - value)
  }

  const handleSubmit = async ({creditValue}) => {
    const price = creditValue / 1000
    purchaseCredit(creditValue, price)
    
    setCredit(credit + creditValue)
  }

  const submitCreditCardInfo = async values => {
    console.log(values)
  }

  return (
    <View style={styles.container}>
        <Text>Buy Credit</Text>

        <Formik initialValues={{creditValue: 0}} onSubmit={values => handleSubmit(values)}>
          {({handleChange, handleSubmit, errors}) => (
            <React.Fragment>

              <LeaperInput placeholder="Amount" onChangeText={handleChange('creditValue')}/>
              <ErrorMessage error={errors.creditValue}/>

              <SubmitButton title="Buy" onPress={handleSubmit}/>

            </React.Fragment>
          )}
        </Formik>

        <Text style={styles.text}>Credit: {credit}</Text>
        <Text style={styles.text}>Buy Point Tokens</Text>

        <SubmitButton title="50" onPress={() => purchaseToken(50)}/>
        <SubmitButton title="100" onPress={() => purchaseToken(100)}/>
        <SubmitButton title="500" onPress={() => purchaseToken(500)}/>
        <SubmitButton title="1000" onPress={() => purchaseToken(1000)}/>
        <SubmitButton title="5000" onPress={() => purchaseToken(5000)}/>

        <Button title="Activate Modal" onPress={() => setModalVisible(true)}/>

        <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modal}>
              <Text>Credit Card Info: </Text>

              <Formik initialValues={{ccNumber: '', expiryDate: '', cvv: ''}} onSubmit={values => handleSubmit(values)}>
                {({handleChange, handleSubmit, errors}) => (
                <React.Fragment>

                  <LeaperInput placeholder="Credit Card Number" onChangeText={handleChange('ccNumber')}/>
                  <ErrorMessage error={errors.ccNumber}/>


                  <LeaperInput placeholder="Expiry Date" onChangeText={handleChange('expiryDate')}/>
                  <ErrorMessage error={errors.expiryDate}/>
                  
                  <LeaperInput placeholder="CVV" onChangeText={handleChange('cvv')}/>
                  <ErrorMessage error={errors.cvv}/>

                  <SubmitButton title="Confirm" onPress={handleSubmit}/>

                </React.Fragment>
              )}
              </Formik>

              <Button title="Cancel" onPress={() => setModalVisible(false)}/>
            </View>
        </Modal> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'mintcream'
  },

  text: {
      fontSize: 30,
      padding: 10
  },

  modal: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ShopScreen;
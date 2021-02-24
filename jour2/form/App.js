import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Pressable} from 'react-native';

export default function App() {

  const [emailInput, setEmailInput] = useState(styles.loginInput)
  const [passwordInput, setPasswordInput] = useState(styles.loginInput)

  const validInput= (text) => {
    if (text.length >= 6) {
      setEmailInput(styles.loginInputValid)
    } else {
      setEmailInput(styles.loginInput)
    }
  }

  const validPasswordInput = (text) => {
    if (text.length >= 6) {
      setPasswordInput(styles.loginInputValid)
    } else {
      setPasswordInput(styles.loginInput)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={emailInput} placeholder=" Votre e-mail" onChangeText={(email) => {validInput(email)}} keyboardType='email-address'></TextInput>
      <TextInput style={passwordInput} placeholder="Votre password" onChangeText={(password) => {validPasswordInput(password)}} secureTextEntry={true}></TextInput>
      <Pressable style={styles.button}>
        <Text style={{color: 'white', fontSize: 25}}>Connection</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    marginBottom: 25
  },
  loginInput: {
    marginBottom: 15,
    height: 50,
    width: 400,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    color: 'black',
    fontSize: 18
  },
  loginInputValid: {
    marginBottom: 15,
    height: 50,
    width: 400,
    padding: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1f98de',
    width: 400,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});

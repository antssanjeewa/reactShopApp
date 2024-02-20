import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { collection, doc, setDoc, addDoc, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseInit';

const SignUpPage = ({ navigation }) => {


  function setUserToDb() {

    const name = 'test';
    const email = 'test2@gmail.com';
    const password = '123';

    // setIsLoading(true)
    addDoc(
      collection(db, 'users'), {
      name,
      email,
      password
    }).then(res => {
      Alert.alert('Success', 'User Found')
      // setIsLoading(false)
      // if (ds.size > 0) {
      //   // const user = ds.docs[0].data();
      //   // console.log(user)
      //   // navigation.navigate('Home');
      // } else {
      //   Alert.alert('Error', 'User Not Found')
      // }
    }).catch(e => {
      Alert.alert('Error', 'User Not Found')
    })
  }

  function goToSignInPage() {
    navigation.navigate('SignIn');
  }

  function goToHomePage() {
    setUserToDb();
    // navigation.navigate('Home');
  }

  function SignUpForm() {
    return (
      <View style={styles.formContainer}>

        <View style={styles.textContainer}>
          <TextInput style={styles.textField} placeholder='Name' />
        </View>

        <View style={styles.textContainer}>
          <TextInput style={styles.textField} placeholder='Your Email' />
        </View>

        <View style={styles.textContainer}>
          <TextInput style={styles.textField} placeholder='Password' secureTextEntry={true} />
        </View>

      </View>
    );
  }

  function SignButton() {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.loginText}>Sign up</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => goToHomePage()}>
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  function FooterLinks() {
    return (
      <View style={[styles.buttonContainer, { marginTop: 80 }]}>
        <View></View>
        <TouchableOpacity onPress={() => goToSignInPage()}>
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image source={require('../assets/img/signup_background.png')} resizeMode='cover' style={styles.backgroundImage} />

      <Text style={styles.welcomeText}>{'Create\nAccount'}</Text>

      <KeyboardAwareScrollView>

        <SignUpForm />

        <SignButton />

        <FooterLinks />
      </KeyboardAwareScrollView>

      <StatusBar style="auto" />
    </View>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  welcomeText: {
    fontSize: 55,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '40%',
    marginLeft: 40
  },

  formContainer: {
    marginTop: '25%'
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 70,
    marginHorizontal: 30,
    marginBottom: 30,
    justifyContent: 'center',
    paddingLeft: 20,
  },

  textField: {
    fontSize: 20
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    alignItems: 'center',
  },

  loginText: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  loginButton: {
    backgroundColor: '#367cfc',
    padding: 15,
    borderRadius: 50
  },

  link: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#367cfc'
  }
});

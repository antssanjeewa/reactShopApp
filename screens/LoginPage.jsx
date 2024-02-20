import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseInit';

const LoginPage = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);

  function getUserInDb() {
    setIsLoading(true)
    getDocs(query(
      collection(db, 'users')
      , where('email', '==', 'test@gmail.com')
    )).then(ds => {
      setIsLoading(false)
      if (ds.size > 0) {
        const user = ds.docs[0].data();
        console.log(user)
        // Alert.alert('Error', 'User Found')
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'User Not Found')
      }
    })
  }


  function goToSignUpPage() {
    navigation.navigate('SignUp');
  }

  function goToHomePage() {
    getUserInDb()

  }

  function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={styles.formContainer}>

        <View style={styles.textContainer}>
          <TextInput
            style={styles.textField}
            placeholder='Your Email'
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail} />
        </View>

        <View style={styles.textContainer}>
          <TextInput
            style={styles.textField}
            placeholder='Password'
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword} />
        </View>

      </View>
    );
  }

  function SignButton() {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.loginText}>Sign in</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => goToHomePage()}>
          {isLoading ? (
            <ActivityIndicator color='white' size={30}></ActivityIndicator>
          ) : (
            <AntDesign name="arrowright" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  function FooterLinks() {
    return (
      <View style={[styles.buttonContainer, { marginTop: 150 }]}>
        <TouchableOpacity onPress={() => goToSignUpPage()}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Forget Password</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/login_background.png')} resizeMode='cover' style={styles.backgroundImage} />

      <Text style={styles.welcomeText}>{'Welcome\nBack'}</Text>

      <KeyboardAwareScrollView keyboardShouldPersistTaps={"never"}>
        <LoginForm />

        <SignButton />

        <FooterLinks />
      </KeyboardAwareScrollView>

      <StatusBar style="auto" />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    width: '100%',
    position: 'absolute'
  },

  welcomeText: {
    fontSize: 55,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '30%',
    marginLeft: 40
  },

  formContainer: {
    marginTop: '40%'
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

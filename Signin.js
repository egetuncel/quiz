import React, { useState } from 'react'
import {
  StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView,
  Keyboard, TouachableWi
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';

export default function Signin({ navigation }) {

  const [state, setState] = useState(true);

  const changeIcon = () => {
    // this.setState(prevState => ({
    //   icon: prevState.icon === "eye-outline" ? "eye-off-outline" : "eye-outline",
    //   password: !prevState.password
    // }));
    setState(!state);
  }
  const goToSignUp = () => {
    navigation.navigate('signUp');
  }
  const goToForgot = () => {
    navigation.navigate('Forgot');
  }
  const goToHome = () => {
    navigation.navigate("Home")
    
  }


  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.title}>LOGIN</Text>

          <View style={styles.view} >
            <Icon name="mail-outline" size={20} color={"#009578"} ></Icon>
            <TextInput style={styles.input} placeholder={"Email"} keyboardType={"email-address"} autoCapitalize="none"></TextInput>
          </View>

          <View style={styles.view}>
            <Icon name="lock-closed-outline" size={20} color={"#009578"}></Icon>
            <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={state} autoCapitalize="none"></TextInput>
            <Icon name={state ? "eye-off-outline" : "eye-outline"} size={20} color={"#009578"} onPress={() => changeIcon()}></Icon>
          </View>

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textLogin} >LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignup} onPress={goToSignUp}>
            <Text style={styles.textSignup} >DON'T HAVE AN ACCOUNT? SIGN UP!</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToForgot}>
            <Text style={styles.textSignup}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.bottom} >
          <TouchableOpacity onPress={goToHome}>
            <Text style={styles.textSignup}>CONTINUE WITHOUT LOGIN</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  view: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
  },

  buttonLogin: {
    width: "90%",
    borderRadius: 15,
    padding: 20,
    backgroundColor: "#009578",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  textLogin: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },

  buttonSignup: {
    marginVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  textSignup: {
    color: "#009578",
    fontWeight: "500",
    fontSize: 14,
  },

  title: {
    marginBottom: 30,
    fontSize: 24,
  },

  bottom: {
    color: "#009578",
    marginTop: 200,
    alignItems: 'center',
    justifyContent: "center",
  }
})


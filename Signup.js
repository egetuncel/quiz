import React, { Component, useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { AuthContext } from './AuthProvider';
import Icon from "react-native-vector-icons/Ionicons"
import firestore from '@react-native-firebase/firestore';


export default function Signup({ navigation }) {
  
  const [state, setState] = useState(true);
  const [state2, setState2] = useState(true);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);

  const changeIcon1 = () => {
    
    setState(!state);

  }
  const changeIcon2 = () => {
   
    setState2(!state2);

  }
  const ClosePage = () => {
    navigation.goBack();
  }

  const goToSignIn = () => {
    
    register(email, password, username);
    
   
  } 

  return (
    <ScrollView>

      <TouchableOpacity style={{ marginHorizontal: 15, marginTop: 50 }} onPress={ClosePage}>
        <Icon name="chevron-back-outline" size={35}></Icon>
      </TouchableOpacity>

      <View style={styles.container}>

        <Text style={styles.title}>SIGNUP</Text>

        <View style={styles.view} >
          <Icon name="person-outline" size={20} color={"#009578"} ></Icon>
          <TextInput style={styles.input}
            value={username}
            placeholder={"Username (Optional)"}
            keyboardType={"default"}
            autoCapitalize="none"
            onChangeText={(userName) => setUsername(userName)}>
          </TextInput>
        </View>

        <View style={styles.view} >
          <Icon name="mail-outline" size={20} color={"#009578"} ></Icon>
          <TextInput 
            style={styles.input}
            value={email}
            placeholder={"Email"}
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(userEmail) => setEmail(userEmail)}>
          </TextInput>
        </View>

        <View style={styles.view}>
          <Icon name="lock-closed-outline" size={20} color={"#009578"}></Icon>
          <TextInput 
            style={styles.input}
            value={password}
            placeholder={"Password"} 
            secureTextEntry={state} 
            autoCapitalize="none"
            onChangeText={(userPassword) => setPassword(userPassword)}>
          </TextInput>
          <Icon name={state ? "eye-off-outline" : "eye-outline"} size={20} color={"#009578"} onPress={() => changeIcon1()}></Icon>
        </View>

        <View style={styles.view}>
          <Icon name="lock-closed-outline" size={20} color={"#009578"}></Icon>
          <TextInput 
            style={styles.input} 
            value={confirmPassword}
            placeholder={"Password"} 
            secureTextEntry={state2} 
            autoCapitalize="none"
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}>
          </TextInput>
          <Icon name={state2 ? "eye-off-outline" : "eye-outline"} size={20} color={"#009578"} onPress={() => changeIcon2()}></Icon>
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={goToSignIn}>
          <Text 
          style={styles.textLogin}
         >SIGNUP</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
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


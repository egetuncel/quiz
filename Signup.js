import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"


export default function Signup({ navigation }) {
  // state = {
  //   icon: "eye-off-outline",
  //   password: true
  // }

  // state2 = {
  //   icon2: "eye-off-outline",
  //   password2: true
  // }

  const [state, setState] = useState(true);
  const [state2, setState2] = useState(true);


  const changeIcon1 = () => {
    // this.setState(prevState => ({
    //   icon: prevState.icon === "eye-outline" ? "eye-off-outline" : "eye-outline",
    //   password: !prevState.password
    // }));
    setState(!state);

  }
  const changeIcon2 = () => {
    // this.setState(prevState => ({
    //   icon2: prevState.icon === "eye-outline" ? "eye-off-outline" : "eye-outline",
    //   password2: !prevState.password
    // }));
    setState2(!state2);

  }
  const ClosePage = () => {
    navigation.goBack();
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
          <TextInput style={styles.input} placeholder={"Username"} keyboardType={"email-address"} autoCapitalize="none"></TextInput>
        </View>

        <View style={styles.view} >
          <Icon name="mail-outline" size={20} color={"#009578"} ></Icon>
          <TextInput style={styles.input} placeholder={"Email"} keyboardType={"email-address"} autoCapitalize="none"></TextInput>
        </View>

        <View style={styles.view}>
          <Icon name="lock-closed-outline" size={20} color={"#009578"}></Icon>
          <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={state} autoCapitalize="none"></TextInput>
          <Icon name={state ? "eye-off-outline" : "eye-outline"} size={20} color={"#009578"} onPress={() => changeIcon1()}></Icon>
        </View>

        <View style={styles.view}>
          <Icon name="lock-closed-outline" size={20} color={"#009578"}></Icon>
          <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={state2} autoCapitalize="none"></TextInput>
          <Icon name={state2 ? "eye-off-outline" : "eye-outline"} size={20} color={"#009578"} onPress={() => changeIcon2()}></Icon>
        </View>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>SIGNUP</Text>
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


import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

export function Forgot ( { navigation } ) {
  
  const ClosePage = () => {
    navigation.goBack();
  }

   
        return (
          <ScrollView>
            <TouchableOpacity style={{ marginHorizontal: 15, marginTop: 50 }} onPress={ClosePage}>
            <Icon name="chevron-back-outline" size={35}></Icon>
            </TouchableOpacity>

            <View style={styles.container}>
                
                <Text style={styles.title}>FORGOT PASSWORD?</Text>

                <View style={styles.view} >
                    <Icon name="mail-outline" size={20} color={"#009578"} ></Icon>
                    <TextInput style={styles.input} placeholder={"Email"} keyboardType={"email-address"} autoCapitalize="none"></TextInput>
                </View>

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>SEND EMAIL</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
        )
    }


const styles = StyleSheet.create({
    container: {
      paddingTop: 130,
      alignItems: "center",
    },
    view: {
      backgroundColor: "#e8e8e8",
      flexDirection: "row",
      width: "90%",
      padding: 20,
      borderRadius: 15,
      marginVertical: 10,
    },
    title: {
      marginBottom: 30,
      fontSize: 24,
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
    textLogin:{
      color: "white",
      fontWeight: "500",
      fontSize: 18,
    },
})

export default Forgot

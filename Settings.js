import React, { useState, useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import SettingsAccount from './SettingsAccount'
import firestore from '@react-native-firebase/firestore';
import { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { AuthContext } from './AuthProvider';


export default function Settings() {

    const {user, logout} = useContext(AuthContext);
    



    return (
        
        <SafeAreaView style={{ flex: 1,   backgroundColor: "white" }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                
                    <View>
                        <Text style={{color:"#5d616f",fontSize:14,fontWeight:"500"}}> {user.email}</Text>
                        <Text style={{ color: "090c0d", fontSize: 29, fontWeight:"bold", paddingTop:5 }}>SETTINGS</Text>
                    </View>
                <View style={styles.container}>
                    <View >
                        <SettingsAccount></SettingsAccount>
                    </View>

                    
                </View>
                <View>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => logout()}>
            <Text style={styles.textLogin}  >SIGN OUT</Text>
          </TouchableOpacity>
                </View>
            </View>
           
        </ScrollView>
        
        </SafeAreaView>
       
        
    
    
    )
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        width: "auto",
        borderColor: "#ddd",
        backgroundColor: "#00cca3",
        borderWidth: 0.5,
        borderRadius: 20,
        marginTop: 32,
        
        overflow: "hidden"
    },
    buttonLogin: {
        width: "auto",
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#dc143c",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      },
    
      textLogin: {
        color: "white",
        fontWeight: "500",
        fontSize: 18,
      },
    
});

import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import SettingsAccount from './SettingsAccount'

export default function Settings() {
    return (
        
        <SafeAreaView style={{ flex: 1,   backgroundColor: "white" }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                
                    <View>
                        <Text style={{ color: "090c0d", fontSize: 29, fontWeight:"bold", paddingTop:5 }}>SA</Text>
                    </View>
                <View style={styles.container}>
                    <View >
                        <SettingsAccount></SettingsAccount>
                    </View>

                    <View style={styles.container}>
                    
                    </View>
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
    
})

import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

export default function History() {
    return (
        <View>
        <SafeAreaView style={{  backgroundColor: "#009578" }}>
        <View style={styles.header}>
        
            <View style={styles.logo}>
            <Icon name="person-outline" size={22}></Icon>
            </View>
            <Text style={styles.text}>sa</Text>
        
        </View>
        </SafeAreaView>
        <View style={styles.container}>
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                
                <Text style={{marginLeft:20, fontSize:18, fontWeight:"500"}}>HISTORY</Text>
                
            </View>
            </TouchableOpacity>
        </View>
        </View>
    
    
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#009578",
        flex: -1,
        flexDirection: "row-reverse",
        marginRight: 100,
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 10,
      },
      logo: {
        marginLeft: 20,
    
        display: "flex",
        backgroundColor: "#e4e6eb",
        width: 40,
        height: 40,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      container: {
        flexDirection: "column",
        paddingHorizontal: 20,
        
        
        
        marginTop: 32,
        
    },
    viewStyle : {
        overflow: "hidden",
        borderColor: "#ddd",
        borderWidth: 0.5,
        borderRadius: 20,
        height: "auto",
        width: "auto",
        flexDirection:"row",
        backgroundColor: "#00cca3",
        alignItems:"center",
        paddingLeft: 10,
    },
})

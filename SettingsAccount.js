import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Icon from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-elements/dist/divider/Divider'

const SettingsAccount = () => {
    
    

    return (
        <View>
            <Text h1 style={{fontSize:20,fontWeight:"bold",paddingTop:15, paddingLeft:12, color:"white"}}>Account</Text>

            <View style={{flexDirection:"column",paddingTop:20, paddingBottom:20,}}>
                <TouchableOpacity>
                <View style={styles.viewStyle}>
                    <Icon name="lock-closed-outline" size={20}></Icon>
                    <Divider orientation="vertical" color="white" style={styles.dividerSmall}></Divider>
                    <Text style={styles.textStyle}>Change Password</Text>
                    <Icon name="chevron-forward-outline" style={styles.icon} size={20}></Icon>
                </View>
                </TouchableOpacity>
                <Divider orientation="horizontal" color="white" style={styles.dividerBig} ></Divider>
                
                <TouchableOpacity>
                <View style={styles.viewStyle}>
                    <Icon name="notifications-outline" size={20}></Icon>
                    <Divider orientation="vertical" color="white" style={styles.dividerSmall}></Divider>
                    <Text style={styles.textStyle}>Notifications</Text>
                    
                    <Icon name="chevron-forward-outline" style={styles.icon} size={20}></Icon>
                    
                </View>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flexDirection:"row",
        
       
        paddingLeft: 10,
    },
    textStyle : {
        fontSize:17,
        fontWeight:"400",
       
        color: "white"
    },
    dividerBig : {
        marginHorizontal: 15,
        marginVertical: 10
    },
    dividerSmall : {
        marginHorizontal: 10,
    },
    icon : {
        marginLeft: "auto",
        color: "black",
        
    }
})


export default SettingsAccount
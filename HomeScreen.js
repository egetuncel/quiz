import React, { useContext, useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { AuthContext, AuthProvider } from './AuthProvider';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

 export default function HomeScreen({navigation}) {
    const {user, setUser} = useContext(AuthContext)
   
    const goToQuiz = () => {
        navigation.navigate("Quiz");
    }

    const getUser = async () => {
        list = [];

        const userDocument = await firestore().collection("users").doc(user.uid).get();
        data = userDocument.data();
        console.log(data);
    }
    
    useEffect(() => {
      getUser();
    }, [])
 
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}> 
        <Text style={styles.text}> {user.uid}</Text>
        <Text style={{ color: "090c0d", fontSize: 29, fontWeight:"bold", paddingTop:5 }}>QUIZ</Text>
        </View>
        
        <View style={styles.container}>
            <View style={styles.viewStyle}>
                <TouchableOpacity  onPress={goToQuiz}>
                <Icon name="add-outline" size={50}></Icon>
                </TouchableOpacity>
                <Divider orientation="vertical" color="white" style={{marginVertical: 10 }}></Divider>
                <Text style={{color:"white", marginLeft:20, fontSize:18, fontWeight:"400"}}>START THE QUIZ!</Text>
               
            </View>
            
        </View>
      
    
       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#009578",
        flex: -1,
        flexDirection: "row-reverse",
      
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
    text : {
        fontWeight: "500",
        color:"#5d616f",
        textTransform: "capitalize",
        fontSize:14,
    }
})

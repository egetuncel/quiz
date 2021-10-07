import React, { useEffect, useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { AuthContext, AuthProvider } from './AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function History() {

    const {user, setUser} = useContext(AuthContext)
   
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
        <ScrollView>
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}> 
        <Text style={styles.text}> {data.username}</Text> 
        <Text style={{ color: "090c0d", fontSize: 29, fontWeight:"bold", paddingTop:5 }}>HISTORY</Text>
        </View>
        <View style={{marginTop:22}}>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        <View style={styles.container}>
        
            <TouchableOpacity> 
            <View style={styles.viewStyle}>
                <Text style={styles.score}>55</Text>
            <Divider orientation="vertical" color="white" style={{marginVertical: 10, marginHorizontal: 10, }}></Divider>
            <View style={{flexDirection:"column"}}>
                <Text style={{fontSize:18, fontWeight:"500", color:"white"}}>QUIZ1</Text>
                <Text style={{color:"white"}}>sa</Text>
                <Text style={{color:"white"}}>as</Text>
                
            </View>   
            </View>
            </TouchableOpacity>

            
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    
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
        
        
        
        marginTop: 10,
        
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
        color: "white",
        textTransform: "capitalize"
    },
    score : {
        color: "white",
        fontSize: 36,
        marginLeft: 10,
        marginVertical: 10,
    },
    text : {
        fontWeight: "500",
        color:"#5d616f",
        textTransform: "capitalize",
        fontSize:14,
    }
})

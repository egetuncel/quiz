import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons"
import History from './History';
import HomeScreen from './HomeScreen';
import Settings from './Settings';


const Tab = createBottomTabNavigator();
const Main = createStackNavigator();
const Final = createStackNavigator();



const Bottom = () => {
  return(
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      }
      else if (route.name === "History") {
        iconName = focused ? "book" : "book-outline";
      }
      else if (route.name === 'Settings') {
        iconName = focused ? 'list' : 'list-outline';
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={size} color={color} />;
  
    },
  })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      activeBackgroundColor: "#009578",
      inactiveBackgroundColor: "#009578",
      style: { backgroundColor: "#009578" }

    }}>

    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  )
} 



export default function Home( ) {

  return(
    <Main.Navigator mode="modal">
        <Main.Screen name="Footer" component={Bottom} options={{ headerShown: false }}/>
        
        
  
      </Main.Navigator>
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
  text: {
    fontSize: 20,
    color: "white",
  }
})



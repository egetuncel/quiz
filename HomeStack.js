import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, SafeAreaView } from '@react-navigation/native';
import SignIn from './Signin';
import SignUp from './Signup';
import Forgot from './Forgot';
import Home from './Home';
import { MainTabNavigator } from './Home';


const Stack = createStackNavigator();

export default () => {



    return (
       
        <NavigationContainer >
            
            <Stack.Navigator initialRouteName='Ege' screenOptions={{ gestureEnabled: true }}>
                <Stack.Screen name='signIn' options={{ headerShown: false, headerTitle: 'SignIn' }} component={SignIn} />
                <Stack.Screen name="signUp" options={{ headerShown: false, headerTitle: 'SignUp' }} component={SignUp} />
                <Stack.Screen name="Forgot" options={{ headerShown: false, headerTitle: 'Forgot' }} component={Forgot} />
                <Stack.Screen name="Home" options={{ headerShown: false, headerTitle: 'Home' }} component={Home} />
               
               
            </Stack.Navigator>
      
        </NavigationContainer>
        
    );


}

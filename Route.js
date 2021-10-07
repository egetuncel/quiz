import React, {useContext, useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, SafeAreaView, StackRouter } from '@react-navigation/native';
import SignIn from './Signin';
import SignUp from './Signup';
import Forgot from './Forgot';
import Home from './Home';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';


const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='signIn' options={{ headerShown: false, headerTitle: 'SignIn' }} component={SignIn}/>
        <AuthStack.Screen name="signUp" options={{ headerShown: false, headerTitle: 'SignUp' }} component={SignUp}/>
        <AuthStack.Screen name="Forgot" options={{ headerShown: false, headerTitle: 'Forgot' }} component={Forgot}/>
    </AuthStack.Navigator>
    )
}

export default Route = () => {
    const {user, setUser} = useContext(AuthContext);
     const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
      };
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    
      if (initializing) return null;

    return (
   
     <NavigationContainer>
      {user ? <Home /> : <AuthStackScreen />}
    </NavigationContainer>
     
    );


}

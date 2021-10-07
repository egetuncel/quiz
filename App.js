/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Signin from "./Signin";
import Signup from './Signup';
import Home from './Home';
import Forgot from './Forgot';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Route from './Route';
import { AuthProvider } from './AuthProvider';
import 'react-native-gesture-handler';

function App(){
  return (
   <AuthProvider>
      <Route></Route>
    </AuthProvider>
)
}





export default App;

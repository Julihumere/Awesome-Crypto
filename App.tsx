// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Screens/HomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <HomeScreen />
  );
}

export default App;
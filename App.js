import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/pages/Home";
import MusicScreen from "./src/pages/Music";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: 'Tela de Início',
      }}
        />
        <Stack.Screen 
        name="Music" 
        component={MusicScreen}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
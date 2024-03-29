import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from '@expo/vector-icons/Feather'

import Home from './src/pages/Home'
import About from './src/pages/About'

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'purple',
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopWidth: 0,
          }
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name='home' color={color} size={35} />
            }
          }}
        />
        <Tab.Screen
          name="about"
          component={About}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name='help-circle' color={color} size={35}/>
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

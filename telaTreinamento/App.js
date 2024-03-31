import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Voltar from './pages/Voltar';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#222222',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: '#1ed760',
            borderBottomWidth: 0,

          }
        }}
      >

          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Icon name='search' color={color} size={size} />
              }
            }}
          />

          <Tab.Screen
            name="Voltar"
            component={Voltar} 
            options={{
              tabBarIcon: ({color, size}) => {
                return <Icon name='corner-down-left' color={color} size={size} />
              }
            }}
          />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}



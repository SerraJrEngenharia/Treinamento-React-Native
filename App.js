import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

import AppMusic from './src/pages/AppMusic'
import PageButton from "./src/pages/PageButton";

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'blue',
                }}
            >

                <Tab.Screen
                    name="AppMusic"
                    component={AppMusic}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                            return <Feather name="music" color={color} size={30} />
                        }
                    }}
                />

                <Tab.Screen
                    name="PageButton"
                    component={PageButton}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <Feather name="info" color={color} size={30} />
                        }
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
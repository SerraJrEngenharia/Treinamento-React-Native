
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from '@expo/vector-icons/Feather';

import Lyric from './src/pages/Lyric';
import Pag2 from "./src/pages/Pag2";

const Tab = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            >

                <Tab.Screen
                    name="Lyric"
                    component={Lyric}
                    options={{
                        tabBarIcon: ({ color, size}) => {
                            return <Feather name="music" color={color} size={size} />
                        }
                    }}
                />

                <Tab.Screen
                    name="Pag2"
                    component={Pag2}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <Feather name="info" color={color} size={size} />
                        }
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

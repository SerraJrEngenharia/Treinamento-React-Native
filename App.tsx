import "./src/styles/global.css"

import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './src/screens/Home';
import SecondScreen from './src/screens/Second'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            borderTopWidth: 0, 
            minHeight: 64
          }, 
          tabBarItemStyle: {
            paddingBottom: 13, 
            paddingTop: 14
          }
        }}
      >

        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            )}}/>

        <Tab.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{ 
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="developer-mode" size={size} color={color} />
            )}}
          />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


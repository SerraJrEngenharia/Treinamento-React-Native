import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather'

import PageOne from "./src/Components/Pages/PageOne";
import PageTwo from './src/Components/Pages/PageTwo';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "#00FF00",
            tabBarStyle:{
              backgroundColor: '#202225',
              borderTopWidth: 0,
            }
          }}>
          <Tab.Screen 
            name='Page1' 
            component={PageOne} 
            options={{
              title:'AppFy',
              headerShown: false,
              tabBarIcon: ({color, size}) => {
                return <Feather name="music" color={color} size={size}/>
              }
            }}
            />
          <Tab.Screen 
            name='Page2' 
            component={PageTwo} 
            options={{
              title:'Botão',
              tabBarIcon: ({color, size}) => {
                return <Feather name="file-text" color={color} size={size}/>
              }
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
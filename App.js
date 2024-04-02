import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PageOne from "./src/Components/Pages/PageOne";
import PageTwo from './src/Components/Pages/PageTwo';
import Navegar from './src/Components/Pages/TabNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='Page1' 
            component={PageOne} 
            options={{
              title:'Página principal',
              headerShown: false,
            }}
            />
          <Tab.Screen 
            name='Page2' 
            component={PageTwo} 
            options={{
              title:'Página 2'
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
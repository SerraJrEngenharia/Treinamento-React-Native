import { SafeAreaView } from 'react-native';

import "./src/styles/global.css"
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView className=' '>
      <Home/>
    </SafeAreaView>
  );
}


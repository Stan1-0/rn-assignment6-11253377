import { View, StyleSheet} from 'react-native';
import Home from './components/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigatior} from '@react-navigation/stack';

const Stack = createStackNavigatior();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name= 'Home'
         component = {Home}
         options={{ headerShown: false }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


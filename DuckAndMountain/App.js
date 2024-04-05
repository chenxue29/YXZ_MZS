import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import AppIndex from './src/pages/appindex';
import Register from './src/pages/register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='首页' component={AppIndex} options={{ headerLeft: null, headerShown: false }}/>
        <Stack.Screen name='登录' component={Login} options={{ headerLeft: null, headerShown: false }}/>
        <Stack.Screen name='注册' component={Register} options={{ headerLeft: null, headerShown: false }}/>
        
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

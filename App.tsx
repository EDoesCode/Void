import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './app/Start';
import Home from './app/Home';
import Mental from './app/Mental';
import Physical from './app/Physical';
import Covid from './app/Covid';

type RootStackParamList = {
  Start: {};
  Home: {};
  Mental: {};
  Physical: {};
  Covid: {};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Mental' component={Mental} />
        <Stack.Screen name='Physical' component={Physical} />
        <Stack.Screen name='Covid' component={Covid} />
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

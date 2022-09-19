import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Checkout } from './views';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Search}
          options={{
            headerShown:true,
            title: 'Buscar fretes'
          }}
        />
        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{
            title: 'Pagamento'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

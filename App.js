import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AreaRestrita from './views/arearestrita/AreaRestrita';
import Cadastro from './views/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='AreaRestrita'
          component={AreaRestrita}
          options={{
            headerShown:true,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

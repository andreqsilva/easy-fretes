import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
import AreaRestrita from './views/arearestrita/AreaRestrita';

import { Checkout, EscolhaLogin, LoginCliente, Entrar, EntrarEmail, Opcao } from './views/index';

const Stack = createStackNavigator();

export default function App(props) {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='EscolhaLogin'
          component={EscolhaLogin}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='LoginCliente'
          component={LoginCliente}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'rgba(255, 197, 110, 1)',
              borderBottomColor: 'transparent',
            },
            headerLeft: () => (
              <HeaderBackButton
                //onPress={() => props.navigation.goBack()}
              />
            ),
          }}
          />

        <Stack.Screen name='Entrar' component={Entrar} options={{headerShown:false}} />

        <Stack.Screen name='EntrarEmail' component={EntrarEmail} options={{headerShown:false}} />

        <Stack.Screen
          name='AreaRestrita'
          component={AreaRestrita}
          options={{
            headerShown:true,
          }}
        />

        <Stack.Screen
          name='Checkout'
          component={Checkout}
        />

        <Stack.Screen
          name='Opcao'
          component={Opcao}
          options={{
            headerShown:false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

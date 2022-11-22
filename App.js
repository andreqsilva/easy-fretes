import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import AreaRestrita from './views/arearestrita/AreaRestrita';
import { Checkout, EscolhaLogin, LoginCliente, Entrar,
         EntrarEmail, Opcao, Cc1, Cc2, Cc3, Cc4,
         CadConf, CadPend, Fp1, Fp2, Fp3, Ct1, Ct2, Foto,
         SearchResult, DriverProfile, StatusFrete, SearchDestination, SearchOrigin,
         PickDate, StatusFreteMotorista, WaitingApproval} from './views/index';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='EscolhaLogin' component={EscolhaLogin} options={{headerShown:false}} />
        <Stack.Screen name='LoginCliente' component={LoginCliente} options={{headerShown: false}} />
        <Stack.Screen name='Entrar' component={Entrar} options={{headerShown:false}} />
        <Stack.Screen name='EntrarEmail' component={EntrarEmail} options={{headerShown:false}} />

        <Stack.Screen name='AreaRestrita'component={AreaRestrita} options={{ headerShown:false}} />

        <Stack.Screen name='SearchResult' component={SearchResult} options={{headerShown:false}} />
        <Stack.Screen name='DriverProfile' component={DriverProfile} options={{headerShown:false}} />
        <Stack.Screen name='SearchOrigin' component={SearchOrigin} options={{headerShown:false}} />
        <Stack.Screen name='SearchDestination' component={SearchDestination} options={{headerShown:false}} />
        <Stack.Screen name='PickDate' component={PickDate} options={{headerShown:false}} />
        <Stack.Screen name='WaitingApproval' component={WaitingApproval} options={{headerShown:false}} />

        <Stack.Screen name='StatusFrete' component={StatusFrete} options={{headerShown:false}} />
        <Stack.Screen name='StatusFreteMotorista' component={StatusFreteMotorista} options={{headerShown:false}} />

        <Stack.Screen
          name='Checkout'
          component={Checkout}
        />

        <Stack.Screen name='Opcao' component={Opcao} options={{headerShown:false}} />
        <Stack.Screen name='Fp1' component={Fp1} options={{headerShown:false}} />
        <Stack.Screen name='Fp2' component={Fp2} options={{headerShown:false}} />
        <Stack.Screen name='Fp3' component={Fp3} options={{headerShown:false}} />

        <Stack.Screen name='Cc1' component={Cc1} options={{headerShown:false}} />
        <Stack.Screen name='Cc2' component={Cc2} options={{headerShown:false}} />
        <Stack.Screen name='Cc3' component={Cc3} options={{headerShown:false}} />
        <Stack.Screen name='Cc4' component={Cc4} options={{headerShown:false}} />
        <Stack.Screen name='CadConf' component={CadConf} options={{headerShown:false}} />

        <Stack.Screen name='Ct1' component={Ct1} options={{headerShown:false}} />
        <Stack.Screen name='Ct2' component={Ct2} options={{headerShown:false}} />
        <Stack.Screen name='Foto' component={Foto} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Search, Booking, Messages, Profile } from '../index';
import { css } from '../../assets/css/Css';

export default function AreaRestrita() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor='black'
      inactiveColor='#fff'
      barStyle={css.area_tab}
    >
      <Tab.Screen
        name='Procurar'
        component={Search}
        options={{
          tabBarIcon:()=>(
            <Icon name='calendar-search' size={24} color='#999' />
          )
        }}
      />
      <Tab.Screen
        name='Seus Fretes'
        component={Booking}
        options={{
          tabBarIcon:()=>(
            <Icon name='truck-fast-outline' size={24} color='#999' />
          )
        }}
      />
      <Tab.Screen
        name='Mensagens'
        component={Messages}
        options={{
          tabBarIcon:()=>(
            <Icon name='message-processing-outline' size={24} color='#999' />
          )
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={Profile}
        options={{
          tabBarIcon:()=>(
            <Icon name='account-outline' size={24} color='#999' />
          )
        }}
      />
    </Tab.Navigator>
  );

}

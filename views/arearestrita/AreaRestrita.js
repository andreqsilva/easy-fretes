import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Search, Booking, Messages, Profile } from '../index';
import { css } from '../../assets/css/Css';
import Tab from '../../navigation/Tabs';

export default function AreaRestrita() {

  const [user,setUser] = useState(null);

  useEffect(()=>{
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  },[]);

  return (

    <View style={{height: 800}}>
      <Tab/>
    </View>


  );
}

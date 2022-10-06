import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { css } from '../css/Css';

export default function MenuAreaRestrita(props) {
  return (
    <View
      style={{
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
      }}>
      <TouchableOpacity style={css.back_button} onPress={()=>props.navigation.goBack()}>
        <Icon name='arrow-left' size={32} color='black' />
      </TouchableOpacity>
    </View>
  );
}

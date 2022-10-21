import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { css } from '../css/Css';

export default function MenuAcess(props) {
  return (
    <View style={css.back_menu}>
      <TouchableOpacity style={css.back_button} onPress={()=>props.navigation.goBack()}>
        <Icon name='arrow-left' size={32} color='black' />
      </TouchableOpacity>
    </View>
  );
}

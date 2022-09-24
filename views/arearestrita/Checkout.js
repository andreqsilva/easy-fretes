import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';

export default function Checkout(props) {
  return (
      <View style={css.container}>
        <Text style={{alignSelf:'center'}}>Área de Checkout</Text>
      </View>
  );
}

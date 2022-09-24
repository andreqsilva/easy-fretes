import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';

export default function Checkout(props) {
  return (
      <View style={css.container}>
        <Text>O valor do frete é R${props.route.params.price}</Text>
        <Text>Seu destino é {props.route.params.adress}</Text>
      </View>
  );
}

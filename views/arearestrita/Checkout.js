import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';

export default function Checkout(props) {
  console.log(props);
  return (
      <View style={css.container}>
        <Text style={{alignSelf:'center', marginBottom: 10}}>Origem: {props.route.params.origin}</Text>
        <Text style={{alignSelf:'center', marginBottom: 10}}>Distino: {props.route.params.destination}</Text>
        <Text style={{alignSelf:'center'}}>Distancia: {props.route.params.distance} Km</Text>
        <Text style={{alignSelf:'center'}}>Duração: {props.route.params.duration} min</Text>
        <Text style={{alignSelf:'center'}}>Preço: R${props.route.params.price}</Text>
      </View>
  );
}

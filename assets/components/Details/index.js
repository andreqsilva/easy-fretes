import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { css } from '../../css/Css';

export default function Details() {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        height: 300,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: { x: 0, y: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#DDD',
        borderStyle: 'solid',
        alignItems: 'center',
        padding: 20
      }}>
      <Text>Popular</Text>
      <Text>Viagens baratas para o dia a dia</Text>
    </View>
  );
}

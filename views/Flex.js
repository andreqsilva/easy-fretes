import React from 'react';
import { View, Text, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../config';
import { css } from '../assets/css/Css';

export default function Flex() {

  return (

    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'slyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>

  );

}

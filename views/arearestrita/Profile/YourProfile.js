import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function YourProfile({navigation}) {

  return (
    <View style={[css.container]}>
      <TouchableOpacity onPress={()=>navigation.navigate('CadVeiculo1')}>
        <Text style={{marginTop: 20}}>Cadastro veiculo</Text>
      </TouchableOpacity>
    </View>
  );
}

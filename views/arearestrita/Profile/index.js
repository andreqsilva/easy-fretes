import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Profile({navigation}) {

  const Drawer = createDrawerNavigator();

  return (
    <View style={[css.container]}>
      <TouchableOpacity onPress={()=>navigation.navigate('CadVeiculo1')}>
        <Text style={{marginTop: 100, alignSelf: 'center', fontSize: 24, textDecorationLine: 'underline'}}>Cadastro veiculo</Text>
      </TouchableOpacity>
    </View>
  );
}

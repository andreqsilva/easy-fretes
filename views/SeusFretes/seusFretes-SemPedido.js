import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';
import { css } from '../../assets/css/Css';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAcess from '../../assets/components/MenuAcess';

export default function seusFretes_SemPedido(navigation){
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{marginTop: 80}}>
        <Text style={css.letra_laranja}>Você não possui{'\n'}fretes agendados!</Text>
      </View>

      <View>
      <Image source={require('../../assets/img/FiguraSemFretesAgendados.png')}/>
      </View>

      <View>
        <Text style={{fontWeight:'bold', fontSize: 20, textAlign: 'center'}}>Aqui aparecerão seus fretes{'\n'}agendados.</Text>
      </View>

      <View>
        <Text style={{fontSize: 16, paddingLeft: 30, paddingRight: 30, marginTop: 30, textAlign: 'center'}}>Assim que seu frete for confirmado, ele aparecerá aqui para que possa ver detalhes e consultá-lo a qualquer momento!</Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <View style={{marginTop: 30, alignSelf: 'center'}}>
          <Image source={require('../../assets/img/btnOk.png')}/>
        </View>
      </TouchableOpacity>

    </View>  
  );
}
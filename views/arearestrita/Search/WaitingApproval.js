import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import config from '../../../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WaitingApproval({navigation}) {

  return (
    <View style={[css.container]}>

      <View style={{marginTop: 50}}>
        <Text style ={[css.letra_laranja, {fontSize: 24}]}>
          Fretes com preços{'\n'}baixos para você
        </Text>
      </View>

      <View style={[{alignItems: 'flex-end', marginTop: -60}]}>
        <Image source={require('../../../assets/img/truck-icon.png')} style={[{height: 140, width: 140}]}/>
      </View>

      <View>
        <Text style={[css.textoBold, {fontSize: 28, marginTop: 37}]}>
          Aguardando Aprovação
        </Text>
      </View>

      <View style={[{alignItems:'center'}]}>
        <Text style={[css.textoRegular, {fontSize: 20, marginTop: 65}]}>Seu pedido de reserva foi{'\n'}enviado para o transportador.</Text>
      </View>

      <View style={[{alignItems: 'center', marginTop: 37}]}>
        <Image source={require('../../../assets/img/check_circle.png')} style={[{width: 48, height: 48, }]}/>
      </View>

      <View style={[{marginTop: 36}]}>
        <Text style={[css.textoMedium, {fontSize: 20}]}>
          Fique Tranquilo!
        </Text>
      </View>

      <View style={[{alignItems: 'center', marginTop: 37}]}>
        <Text style={[{textAlign: 'center', fontSize: 18}]}>
        Assim que houver qualquer{'\n'}alteração no estado do seu pedido,{'\n'}você receberá uma notificação.
        </Text>
      </View>

      <View style={[{alignItems: 'center', marginTop: 50}]}>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
          <Image source={require('../../../assets/img/btnOk.png')} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

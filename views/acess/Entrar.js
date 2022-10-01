import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,} from 'react-native';
import { css } from '../../assets/css/Css';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Entrar({navigation}) {

  return (
    <SafeAreaView style={[css.container, css.initial_cadastro]}>

    <View style={css.back_menu}>
      <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-left' size={32} color='black' />
      </TouchableOpacity>
    </View>

      <View style={css.login_logomarca}>
          <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
      </View>

      <StatusBar style="auto" />
        <View style={{right: 40}}>
          <Text style={css.letra2}>Como deseja se conectar ?</Text>
        </View>

      <View style={{marginTop: 40, right: 30}}>
        <TouchableOpacity style={{paddingBottom: 25}}
          onPress={() => navigation.navigate('EntrarEmail')}
        >
          <View style={css.alinhamentoRow}>
            <Image style={css.icon_cadastro} source={require('../../assets/img/vetorEmail.png')}/>
            <Text style={[css.letra2, {fontSize: 18}]}>  Continuar com e-mail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={css.alinhamentoRow}>
            <Image style={css.icon_cadastro} source={require('../../assets/img/vetorFacebook.png')}/>
            <Text style={[css.letra2, {fontSize: 18}]}>  Continuar com facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 60}}>
        <Text style={{color: '#fff', alignSelf: 'center'}}>Ainda não possuí cadastro?</Text>
      </View>
      
      <TouchableOpacity>
        <View>
          <Text style={{color: '#fff', alignSelf: 'center', textDecorationLine: 'underline'}}>Clique aqui</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

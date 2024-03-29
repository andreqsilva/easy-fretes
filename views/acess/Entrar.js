import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,
         Button, TouchableOpacity, BackHandler} from 'react-native';
import { css } from '../../assets/css/Css';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../assets/components/MenuAcess';

export default function Entrar(props) {

  /*
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, [])
  */

  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  },[]);

  return (
    <View style={[css.container, css.initial_cadastro]}>

      <MenuAcess navigation={props.navigation}/>

      <View style={css.login_logomarca}>
          <Image style={css.logo} source={require('../../assets/img/topo.png')}/>
      </View>

      <StatusBar style="auto" />
        <View style={{right: 40}}>
          <Text style={css.letra2}>Como deseja se conectar ?</Text>
        </View>

      <View style={{marginTop: 40, right: 30}}>
        <TouchableOpacity style={{paddingBottom: 25}}
          onPress={()=>props.navigation.navigate('EntrarEmail')}
        >
          <View style={css.alinhamentoRow}>
            <Image style={css.icon_cadastro} source={require('../../assets/img/vetorEmailAcess.png')}/>
            <Text style={[css.letra2, {fontSize: 18, bottom:10}]}>  Continuar com e-mail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[css.alinhamentoRow]}>
            <Image style={[css.icon_cadastro]} source={require('../../assets/img/vetorFacebookAcess.png')}/>
            <Text style={[css.letra2, {fontSize: 18, bottom:10}]}>  Continuar com facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 60}}>
        <Text style={{color: '#fff', alignSelf: 'center'}}>Ainda não possuí cadastro?</Text>
      </View>

      <TouchableOpacity
        onPress={()=>props.navigation.navigate('Opcao', {type: props.route.params.type})}
      >
        <View>
          <Text
            style={{color: '#fff', alignSelf: 'center', textDecorationLine: 'underline'}}>
              Clique aqui
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

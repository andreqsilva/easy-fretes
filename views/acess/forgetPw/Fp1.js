import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config/config.json';

export default function Fp1 ({navigation}) {

  const [email,setEmail] = useState('none');
  const [id,setId] = useState(null);
  const [randomCode,setRandomCode] = useState('none');
  const [msg,setMsg] = useState('none');
  const [display,setDisplay] = useState('none');

  useEffect(()=>{
    verifyCode();
  });

  function verifyCode() {
    if (randomCode !== 'none') {
      navigation.navigate('Fp2', {randomCode:randomCode, id:id});
    }
  }

  // Verifica se o e-mail está cadastrado
  async function sendFormMail() {
    let response = await fetch(`${config.urlRoot}verifyMail`, {
      method: 'POST',
      body: JSON.stringify({
        email: email
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    //console.log(JSON.stringify(json));
    if (json == 'error') {
      setMsg('E-mail não cadastrado');
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
    } else {
      setId(json);
      sendFormCode();
    }
  }

  async function sendFormCode() {
    let response = await fetch(`${config.urlRoot}code-email`, {
      method: 'POST',
      body: JSON.stringify({
        email: email
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    if (json == 'error') {
      console.log("Falha ao enviar codigo");
    } else {
      setRandomCode(json);
    }
  }

  return (

    <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

      <MenuAcess navigation={navigation}/>

      <View style={[css.container_direction, {marginTop: 40}]}>
        <Text style={[css.letra, {fontSize: 30}]}>Esqueci minha senha</Text>

        <View style={{marginTop: 30, width: 340}}>
          <Text
            style={[
              css.letra,
              {fontSize: 20, textAlign: 'left', top: 15}
              ]}>Qual é o seu email cadastrado?
          </Text>

          <TextInput
            placeholder='Digite seu e-mail'
            placeholderTextColor='#FF6C01'
            onChangeText={text=>setEmail(text)}
            style={[css.cad_dados, css.container_cadastro]}/>

          <View>
            <Text style={css.forget_msg(display)}>{msg}</Text>
          </View>

        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >

      <TouchableOpacity style={{bottom:70}} onPress={()=>sendFormMail()}>
        <Image source={require('../../../assets/img/btnNext.png')}/>
      </TouchableOpacity>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );
}

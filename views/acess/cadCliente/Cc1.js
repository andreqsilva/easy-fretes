import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
          TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../assets/components/MenuAcess';
import config from '../../../config/config.json';

export default function Cc1 ({navigation}) {

  const [email,setEmail] = useState('none');
  const [msg,setMsg] = useState('none');
  const [display,setDisplay] = useState('none');

  // validar email

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
    if (json != 'error') {
      setMsg('E-mail já cadastrado');
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
    } else {
      navigation.navigate('Cc2', {email:email});
    }
  }

    return (

      <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

        <MenuAcess navigation={navigation}/>

        <View style={[css.login_form, {marginTop: 40, height:'80%'}]}>
          <View>
            <Text style={[css.letra, {fontSize: 22}]}>Qual o seu e-mail ?</Text>

            <TextInput
              placeholder='  Digite seu e-mail'
              placeholderTextColor='#FF6C01'
              onChangeText={text=>setEmail(text)}
              style={[css.cad_dados, css.container_cadastro]}
            />
          </View>

          <View>
            <Text style={css.forget_msg(display)}>{msg}</Text>
          </View>

        </View>


        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex:1, justifyContent:'flex-end'}}
        >
          <TouchableOpacity onPress={()=>sendFormMail()} style={{bottom:70}}>
            <Image source={require('../../../assets/img/btnNext.png')}/>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </SafeAreaView>
      );
}

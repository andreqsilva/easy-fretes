import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
          TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../../assets/components/MenuAcess';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../../../../config/config.json';

export default function Ct1 ({navigation}) {

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
      navigation.navigate('Ct2', {email:email});
    }
  }

    return (
      <View style={[css.initial_cadastro, {flex: 1}]}>
        <MenuAcess navigation={navigation}/>

        <View style={[css.login_form, {marginTop: 20, height:'80%'}]}>
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
          {/*<TouchableOpacity onPress={()=>sendFormMail()} style={{bottom:70}}>
            <Image source={require('../../../assets/img/btnNext.png')}/>
          </TouchableOpacity>*/}

          <TouchableOpacity
            style={{bottom: 70}}
            onPress={()=>sendFormMail()}>
            <FontAwesome5 name='arrow-circle-right' size={60} color='white' />
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </View>
      );
}

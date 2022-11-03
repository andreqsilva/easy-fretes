import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
        TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../assets/components/MenuAcess';
import config from '../../../config/config.json';

export default function Cc4 (props) {

  const [isPassword,setIsPassword] = useState(true);
  const [password,setPassword] = useState('none');
  // verificação de senha

  // cria usuário
  async function sendFormCreate() {
    let response = await fetch(`${config.urlRoot}create`, {
      method: 'POST',
      body: JSON.stringify({
        email: props.route.params.email,
        name: props.route.params.name,
        password: password
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    console.log(JSON.stringify(json));
    if (json == 'error') {
      console.log('error');
    } else {
      props.navigation.navigate('CadConf');
    }
    /*
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
    */
  }

  return (

    <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

      <MenuAcess navigation={props.navigation}/>

      <View style={[css.login_form, {marginTop: 40, height: '80%'}]}>
        <View>
          <View style={css.mensagem}>
            <Text style={[css.letra, {fontSize: 22, alignSelf: 'center'}]}>Insira uma senha agora</Text>

          <View>
            <Text
              style={[css.letra, {fontSize: 13, textAlign: 'center', marginTop: 25}]}
                      >Combine pelo menos 8 caracteres, incluindo letras, números e caracteres especiais para garantir uma melhor segurança</Text>
          </View>

          <TextInput
            placeholder='  Insira sua senha'
            placeholderTextColor='#FF6C01'
            onChangeText={text=>setPassword(text)}
            style={[css.cad_dados, css.container_cadastro, {width: 360}]}
            secureTextEntry={isPassword}/>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >
        <TouchableOpacity style={{bottom: 70}} onPress={()=>sendFormCreate()}>
            <Image source={require('../../../assets/img/btnNext.png')}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

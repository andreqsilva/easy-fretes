import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config/config.json';

export default function Fp3 (props) {

  const [novaSenha,setNovaSenha] = useState(null);
  const [confNovaSenha,setConfNovaSenha] = useState(null);
  const [msg,setMsg] = useState(null);
  const [display,setDisplay] = useState('none');

  //console.log(props.route.params.id);

  async function sendFormPass() {
    let response = await fetch(`${config.urlRoot}verifyPass`, {
      method: 'POST',
      body: JSON.stringify({
        id: props.route.params.id,
        novaSenha: novaSenha,
        confNovaSenha: confNovaSenha
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    console.log(JSON.stringify(json));
    if (json != 'error') { // mensagens de erro
      setMsg(json);
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
      props.navigation.navigate('Entrar');
    }
  }

    return (
        <View style={[css.initial_cadastro, {flex: 1}]}>

          <MenuAcess navigation={props.navigation}/>


            <View style={[css.container_direction, {marginTop: 20}]}>

                <Text
                  style={[css.letra, {fontSize: 25}]}>Insira uma nova senha agora</Text>

                <View style={{marginTop: 30, width: 340}}>
                    <Text style={[css.letra, {fontSize: 13, textAlign: 'center'}]}>Combine pelo menos 8 caracteres, incluindo letras, números e caracteres especiais para garantir uma melhor segurança.</Text>

                    <TextInput
                      placeholder='  Insira sua senha'
                      placeholderTextColor='#FF6C01'
                      style={[css.cad_dados, css.container_cadastro, {borderRadius: 8}]}
                      secureTextEntry={true}
                      onChangeText={text=>setNovaSenha(text)}/>
                    <TextInput
                      placeholder='  Confirme a nova senha'
                      placeholderTextColor='#FF6C01'
                      style={[css.cad_dados, css.container_cadastro, {borderRadius: 8}]}
                      secureTextEntry={true}
                      onChangeText={text=>setConfNovaSenha(text)}/>

                    <View>
                      <Text style={css.forget_msg(display)}>{msg}</Text>
                    </View>
                </View>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{flex:1, justifyContent:'flex-end'}}
            >
              <TouchableOpacity
                style={{bottom:70}}
                onPress={()=>sendFormPass()}
              >
                <Image source={require('../../../assets/img/btnOk.png')}/>
              </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
      );
}

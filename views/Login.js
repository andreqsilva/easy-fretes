import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login() {

  const [display,setDisplay] = useState('none');

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[css.container, css.orangebg]} >
      <View style={css.login_logomarca}>
        <Image source={require('../assets/img/topo.png')} />
      </View>

      <View>
        <Text style={css.login_msg(display)}>Usuário ou senha inválidos</Text>
      </View>

      <View style={css.login_form}>
        <TextInput placeholder='Informe o e-mail de login' placeholderTextColor='#FF6C01'
          style={[css.login_input, {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
          }]}/>
        <TextInput placeholder='Insira sua senha' placeholderTextColor='#FF6C01' secureTextEntry={true}
          style={
            [css.login_input, {
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }
          ]}/>
          <View>
            <Text>Esqueceu sua senha?</Text>
          </View>
        <TouchableOpacity style={css.login_button} onPress={()=>setDisplay('flex')}>
          <Text style={css.letra}>Acessar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );

}

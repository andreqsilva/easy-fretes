import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView,
         TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAcess from '../../assets/components/MenuAcess';
import config from '../../config/config.json'

export default function EntrarEmail({navigation}) {

  const [display,setDisplay] = useState('none');
  const [email,setEmail] = useState('none'); // mudar pra email
  const [password,setPassword] = useState('none');
  const [login,setLogin] = useState(false);

  useEffect(()=>{
    verifyLogin();
  },[]);

  useEffect(()=>{
    if (login == true) {
      sendForm();
    } else {
      setEmail(null);
      setPassword(null);
    }
  },[login]);

  // Verifica se o usuário já possui algum login
  async function verifyLogin() {
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setEmail(json.email);
      setPassword(json.senha);
      setLogin(true);
    }
  }

  // Envio do formulario de login
  async function sendForm() {
    let response = await fetch(`${config.urlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });

    let json = await response.json();

    if (json == 'error') {
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 5000);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('AreaRestrita');
    }
  }

  return (

    <SafeAreaView style={[css.container, css.initial_cadastro]} >

      <MenuAcess navigation={navigation}/>

      <View style={css.login_logomarca}>
        <Image style={css.logo} source={require('../../assets/img/topo.png')} />
      </View>

      <View>
        <Text style={css.login_msg(display)}>E-mail ou senha inválidos</Text>
      </View>

      <View style={[css.login_form, {bottom:10}]}>
        <TextInput
          placeholder='Informe o e-mail de login'
          placeholderTextColor='#FF6C01'
          onChangeText={text=>setEmail(text)}
          style={[css.login_input, {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
          }]}/>

        <TextInput
          placeholder='Insira sua senha'
          placeholderTextColor='#FF6C01'
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          style={
            [css.login_input, {
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }
          ]}/>
        <TouchableOpacity onPress={()=>navigation.navigate('Fp1')}>
          <Text style={{color: '#fff', textDecorationLine: 'underline'}}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.login_button} onPress={()=>sendForm()}>
          <Text style={css.letra}>Acessar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );

}

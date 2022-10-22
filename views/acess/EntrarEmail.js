import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView,
         TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuAcess from '../../assets/components/MenuAcess';
import config from '../../config/config.json';

export default function EntrarEmail({navigation}) {

  const [display,setDisplay] = useState('none');
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [errorEmail,setErrorEmail] = useState(null);
  const [errorPassowrd,setErrorPassword] = useState(null);
  const [login,setLogin] = useState(false);

  //console.log(email);
  //console.log(password);
  
  useEffect(()=> {
    verifyLogin();
  },[]);

  useEffect(()=> {
    if (login == true) {
      sendForm();
    } else {
      setEmail(null);
      setPassword(null);
    }
  },[login]);

  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorPassword(null);
    if (email == null) {
      console.log("Preencha seu e-mail corretamente");
      setErrorEmail("Preencha seu e-mail corretamente");
      error = true;
    }
    if (password == null) {
      console.log("Preencha sua senha corretamente");
      setErrorPassword("Preencha sua senha corretamente");
      error = true;
    }
    return !error;
  }

  const salvar = () => {
    if (validar()) {
      console.log("Salvou");
    }
  }

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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[css.login_form, {justifyContent: 'flex-end'}]}>
        <TextInput
          keyboardType='email-address'
          placeholder='Informe o e-mail de login'
          placeholderTextColor='#FF6C01'
          onChangeText={text=>{setEmail(text), setErrorEmail(null)}}
          errorMessage={errorEmail}
          style={[css.login_input, css.container_cadastro]}/>

        <TextInput
          placeholder='Insira sua senha'
          placeholderTextColor='#FF6C01'
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          errorMessage={errorPassowrd}
          style={[css.login_input, css.container_cadastro]}/>

        <TouchableOpacity onPress={()=>navigation.navigate('Fp1')}>
          <Text style={{color: '#fff', textDecorationLine: 'underline'}}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.login_button} onPress={()=>sendForm()}>
          <Text style={css.letra}>Acessar</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );

}

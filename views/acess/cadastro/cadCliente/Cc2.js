import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,
         TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAcess from '../../../../assets/components/MenuAcess';

export default function Cc2 (props) {

  const [name,setName] = useState('none');
  const [lastName,setLastName] = useState('none');

  // validar nome

  return (
    <View style={[css.initial_cadastro, {flex: 1}]}>
      <MenuAcess navigation={props.navigation}/>
      <View style={[css.login_form, {marginTop: 20, height: '80%'}]}>
        <View>
          <Text style={[css.letra, {fontSize: 22}]}>Qual o seu nome ?</Text>
          <TextInput
            placeholder='  Digite seu nome'
            placeholderTextColor='#FF6C01'
            onChangeText={text=>{setName(text)}}
            style={[css.cad_dados, css.container_cadastro]}/>

          <TextInput
            placeholder='  Digite seu sobrenome'
            placeholderTextColor='#FF6C01'
            onChangeText={text=>{setLastName(text)}}
            style={[css.container_cadastro, {marginTop: 3}]}/>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >
        <TouchableOpacity style={{bottom:70}}
          onPress={()=>props.navigation.navigate('Cc3',
          {email:props.route.params.email, name:name, lastName:lastName})}>
          <View>
            <Image source={require('../../../../assets/img/btnNext.png')}/>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

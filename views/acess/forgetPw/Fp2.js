import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard,
        TouchableOpacity,TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAcess from '../../../assets/components/MenuAcess';

export default function Fp2 (props) {

  const [msg,setMsg] = useState('none');
  const [display,setDisplay] = useState('none');
  const [code,setCode] = useState('none');
  const [forget,setForget] = useState(null);

  console.log(props.route.params.randomCode);

  useEffect(()=>{
    if (forget === true) {
      props.navigation.navigate('Fp3', {id:props.route.params.id});
    }
  });

  // verifica se o código digitado está correto
  function verifyCode() {
    if (code !== 'none') {
      console.log(code);
      if (code == props.route.params.randomCode) {
        setForget(true);
      } else {
        setMsg('Código incorreto');
        setDisplay('flex');
        setTimeout(()=>{
          setDisplay('none');
        }, 5000);
      }
    }
  }

    return (
        <SafeAreaView style={[css.initial_cadastro, {flex: 1}]}>

            <MenuAcess navigation={props.navigation}/>

            <View style={[css.container_direction, {marginTop: 40}]}>

              <Text style={[css.letra, {fontSize: 30}]}>Esqueci minha senha</Text>

              <View style={{marginTop: 30, width: 340}}>
                <Text
                  style={[css.letra, {fontSize: 13, textAlign: 'center', top: 8}]}
                  >Caso o e-mail informado esteja correto, um código de 6 dígitos foi enviado para
                   a sua caixa de entrada, por favor insira-o nos campos abaixo.</Text>

                   <TextInput
                    placeholder='  Insira o código'
                    placeholderTextColor='#FF6C01'
                    onChangeText={text=>setCode(text)}
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
                <TouchableOpacity style={{bottom:70}}
                  //style={{justifyContent: 'flex-end'}}
                  onPress={()=>verifyCode()}>
                  <Image source={require('../../../assets/img/btnNext.png')}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </SafeAreaView>
      );
}

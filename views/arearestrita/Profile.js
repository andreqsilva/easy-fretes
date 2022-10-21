import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';

export default function Profile({navigation}) {

  const [idUser,setIdUser] = useState(null);
  const [senhaAntiga,setSenhaAntiga] = useState(null);
  const [novaSenha,setNovaSenha] = useState(null);
  const [confNovaSenha,setConfNovaSenha] = useState(null);
  const [msg,setMsg] = useState(null);

  useEffect(()=>{
    async function getIdUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setIdUser(json.id);
    }
    getIdUser();
  });

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}verifyPass`, {
      method: 'POST',
      body: JSON.stringify({
        id: idUser,
        senhaAntiga: senhaAntiga,
        novaSenha: novaSenha,
        confNovaSenha: confNovaSenha
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    setMsg(json);
  }


  return (

    <View style={[css.container]} >
      <MenuAreaRestrita navigation={navigation}/>

      <View>
        <Text>{msg}</Text>
        <TextInput placeholder='Senha antiga' onChangeText={text=>setSenhaAntiga(text)}/>
        <TextInput placeholder='Nova senha' onChangeText={text=>setNovaSenha(text)}/>
        <TextInput placeholder='Confirmação da nova senha' onChangeText={text=>setConfNovaSenha(text)}/>

        <TouchableOpacity onPress={()=>sendForm()}>
          <Text>Trocar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}

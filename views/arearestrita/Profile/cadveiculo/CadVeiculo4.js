import { StyleSheet, Text, View, TextInput,
         TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';

export default function CadVeiculo4(props) {

  const [placa, setPlaca] = useState('');

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos, {width: 330, marginStart: 70}]}>Qual a placa do veículo?</Text>
        <View style={[css.login_form, {marginTop: 40, height: '80%'}]}>
          <TextInput
            placeholder='RIO2A18 / JJK-1960'
            placeholderTextColor='gray'
            onChangeText={text=>{setPlaca(text)}}
            style={[css.box_input_placa, {width: 270}]}/>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1, justifyContent:'flex-end'}}
      >

        {placa === '' &&
          <TouchableOpacity style={{bottom:78}}>
            <FontAwesome5 name='arrow-circle-right' size={60} color='lightgray' />
          </TouchableOpacity>
        }

        {placa !== '' &&
          <TouchableOpacity
            style={{bottom:78}}
            onPress={()=>props.navigation.navigate('CadVeiculo5', {
              type: props.route.params.type, port: props.route.params.port,
              weight: props.route.params.weight, placa: placa
            })}>
            <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
          </TouchableOpacity>
        }

      </KeyboardAvoidingView>
    </View>
  );
}

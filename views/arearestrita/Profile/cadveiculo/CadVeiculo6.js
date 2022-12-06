import { StyleSheet, Text, View, TouchableOpacity,
         TextInput, KeyboardAvoidingView } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../../config/config.json';

export default function CadVeiculo6(props) {

  const [selectedValue, setSelectedValue] = useState();
  const [modelValue, setModelValue] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(()=> {
    getId();
  },[]);

  async function getId() {
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setUserId(json.id);
    }
  }

  async function sendFormCreate() {
    let response = await fetch(`${config.urlRoot}vehicleCreate`, {
      method: 'POST',
      body: JSON.stringify({
        id: userId,
        modelo: modelValue,
        marca: props.route.params.marca,
        porte: props.route.params.port,
        peso: props.route.params.weight,
        ano: selectedValue,
        placa: props.route.params.placa,
        tipo: props.route.params.type,
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    if (json == 'error') {
      console.log('error');
    } else {
      props.navigation.navigate('CadConfVeiculo');
    }
  }

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos, {fontSize: 28, marginStart: 50, width: 300}]}>Qual o modelo e ano do veículo?</Text>
        <View style={{marginTop: 50}}>
          <TextInput
            placeholder='Insira o modelo do veículo'
            placeholderTextColor='gray'
            onChangeText={text=>setModelValue(text)}
            style={[css.box_input_placa, {fontSize: 15, width: 250}]}/>
          </View>

          <View style={[css.alinhamentoRow]}>
            <View style={{marginRight: 40, marginLeft: 100}}>
              <Text style={[css.text_checkbox, {marginTop: 72}]}>Ano</Text>
            </View>

            <View style={[css.container_picker]}>
              <Picker
                selectedValue={selectedValue}
                style={[css.picker]}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="1990" value="1900" />
                <Picker.Item label="1991" value="1991" />
                <Picker.Item label="1992" value="1992" />
                <Picker.Item label="1993" value="1993" />
                <Picker.Item label="1994" value="1994" />
                <Picker.Item label="1995" value="1995" />
                <Picker.Item label="1996" value="1996" />
                <Picker.Item label="1997" value="1997" />
                <Picker.Item label="1998" value="1998" />
                <Picker.Item label="1999" value="1999" />
                <Picker.Item label="2000" value="2000" />
                <Picker.Item label="2001" value="2001" />
                <Picker.Item label="2002" value="2002" />
                <Picker.Item label="2003" value="2003" />
                <Picker.Item label="2004" value="2004" />
                <Picker.Item label="2005" value="2005" />
                <Picker.Item label="2006" value="2006" />
                <Picker.Item label="2007" value="2007" />
                <Picker.Item label="2008" value="2008" />
                <Picker.Item label="2009" value="2009" />
                <Picker.Item label="2010" value="2010" />
                <Picker.Item label="2011" value="2011" />
                <Picker.Item label="2012" value="2012" />
                <Picker.Item label="2013" value="2013" />
                <Picker.Item label="2014" value="2014" />
                <Picker.Item label="2015" value="2015" />
              </Picker>
            </View>
          </View>
        </View>

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, justifyContent:'flex-end'}}
        >
          {modelValue === '' &&
            <TouchableOpacity style={{bottom:71}}>
              <FontAwesome5 name='arrow-circle-right' size={60} color='lightgray' />
            </TouchableOpacity>
          }

          {modelValue !== '' &&
            <TouchableOpacity
              style={{bottom:71}}
              onPress={()=>sendFormCreate()}>
              <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
            </TouchableOpacity>
          }
        </KeyboardAvoidingView>
    </View>
  );
}

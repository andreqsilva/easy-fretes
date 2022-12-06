import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

export default function CadVeiculo3 (props) {

  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos, {fontSize: 25}]}>Qual o peso máximo que seu veículo transporta?</Text>
        <View style={[css.container_picker, css.alinhamentoRow, {marginTop: 30}]}>
          <Picker
            selectedValue={selectedValue}
            style={[css.picker]}
            onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
          >
            <Picker.Item label="3" value="3" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="27" value="27" />
          </Picker>

          <Text style={[css.text_checkbox]}>Toneladas </Text>
        </View>
      </View>

      {selectedValue &&
        <TouchableOpacity
          style={{bottom:70}}
          onPress={()=>props.navigation.navigate('CadVeiculo4',{
            type: props.route.params.type, port: props.route.params.port,
            weight: selectedValue
          })}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
        </TouchableOpacity>
      }

    </View>
  );
}

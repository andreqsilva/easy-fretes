import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';
import Checkbox from 'expo-checkbox';

export default function CadVeiculo2 (props) {

  const [smallChecked, setSmallChecked] = useState(false);
  const [mediumChecked, setMediumChecked] = useState(false);
  const [largeChecked, setLargedChecked] = useState(false);
  const [port, setPort] = useState('');

  const smallChanged = () => {
    setSmallChecked(!smallChecked);
    if (mediumChecked) {
      setMediumChecked(!mediumChecked);
    } else if (largeChecked) {
      setLargedChecked(!largeChecked);
    }
    if (!smallChecked) {
      setPort('Pequeno');
    } else {
      setPort('');
    }
  }

  const mediumChanged = () => {
    setMediumChecked(!mediumChecked);
    if (smallChecked) {
      setSmallChecked(!smallChecked);
    } else if (largeChecked) {
      setLargedChecked(!largeChecked);
    }
    if (!mediumChecked) {
      setPort('Médio');
    } else {
      setPort('');
    }
  }

  const largeChanged = () => {
    setLargedChecked(!largeChecked);
    if (smallChecked) {
      setSmallChecked(!smallChecked);
    } else if (mediumChecked) {
      setMediumChecked(!mediumChecked);
    }
    if (!largeChecked) {
      setPort('Grande');
    } else {
      setPort('');
    }
  }

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos]}>Qual o porte do seu veículo?</Text>
        <View style={{flexDirection: 'column', maxWidth: '70%', marginRight: 60}}>

          <View style={[css.alinhamentoRow, css.container_checkbox, {}]}>
            <Checkbox style={css.checkbox} value={smallChecked} onValueChange={smallChanged}
                                           color={smallChecked ? '#FFC100' : '#FFC100'}/>
            <Text style={[css.text_checkbox]}>Pequeno</Text>
          </View>

          <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
            <Checkbox style={css.checkbox} disable value={mediumChecked} onValueChange={mediumChanged}
                                           color={mediumChecked ? '#FFC100' : '#FFC100'}/>
            <Text style={[css.text_checkbox]}>Médio</Text>
          </View>

          <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
            <Checkbox style={css.checkbox} disable value={largeChecked} onValueChange={largeChanged}
                                           color={largeChecked ? '#FFC100' : '#FFC100'}/>
            <Text style={[css.text_checkbox]}>Grande</Text>
          </View>
        </View>
      </View>

      {port !== '' &&
        <TouchableOpacity
          style={{bottom:70}}
          onPress={()=>props.navigation.navigate('CadVeiculo3', {
                      type: props.route.params.type, port: port})}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
        </TouchableOpacity>
      }

      {port === '' &&
        <TouchableOpacity style={{bottom:70}}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='lightgray' />
        </TouchableOpacity>
      }

    </View>
  );
}

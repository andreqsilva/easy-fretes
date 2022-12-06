import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';
import Checkbox from 'expo-checkbox';

export default function CadVeiculo1({navigation}) {

  const [openChecked, setOpenChecked] = useState(false);
  const [closedChecked, setClosedChecked] = useState(false);
  const [type, setType] = useState('');

  const openChanged = () => {
    setOpenChecked(!openChecked);
    if (closedChecked) {
      setClosedChecked(!closedChanged);
    }
    if (!openChecked) {
      setType('Aberto');
    } else {
      setType('');
    }
  }

  const closedChanged = () => {
    setClosedChecked(!closedChecked);
    if (openChecked) {
      setOpenChecked(!openChecked);
    }
    if (!closedChecked) {
      setType('Fechado (baú)');
    } else {
      setType('');
    }
  }

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={navigation}/>
      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos]}>Qual o tipo do seu veículo?</Text>
        <View style={{flexDirection: 'column'}}>
          <View style={[css.alinhamentoRow, css.container_checkbox]}>
            <Checkbox style={css.checkbox} value={openChecked} onValueChange={openChanged}
                                           color={openChecked ? '#FFC100' : '#FFC100'}/>
            <Text style={[css.text_checkbox]}>Aberto</Text>
          </View>

          <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
            <Checkbox style={css.checkbox} disable value={closedChecked} onValueChange={closedChanged}
                                           color={closedChecked ? '#FFC100' : '#FFC100'}/>
            <Text style={[css.text_checkbox]}>Fechado (baú)</Text>
          </View>
        </View>
      </View>

      {type !== '' &&
        <TouchableOpacity
          style={{bottom:70}} 
          onPress={()=>navigation.navigate('CadVeiculo2', {type: type})}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='#ff8c00' />
        </TouchableOpacity>
      }

      {type === '' &&
        <TouchableOpacity style={{bottom:70}}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='lightgray' />
        </TouchableOpacity>
      }

    </View>
  );
}

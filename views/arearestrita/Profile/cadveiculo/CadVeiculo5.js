import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../../assets/css/Css';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuAreaRestrita from '../../../../assets/components/MenuAreaRestrita';
import Checkbox from 'expo-checkbox';

export default function CadVeiculo5(props) {

  const [fiat, setFiat] = useState(false);
  const [hyundai, setHyundai] = useState(false);
  const [iveco, setIveco] = useState(false);
  const [volkswagen, setVolkswagen] = useState(false);
  const [kia, setKia] = useState(false);
  const [renault, setRenault] = useState(false);
  const [mercedes, setMercedes] = useState(false);
  const [chevrolet, setChevrolet] = useState(false);
  const [other, setOther] = useState(false);
  const [marca, setMarca] = useState('');

  const fiatChanged = () => {
    setFiat(!fiat);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!fiat) {
      setMarca('Fiat');
    } else {
      setMarca('');
    }
  }

  const hyundaiChanged = () => {
    setHyundai(!hyundai);
    setFiat(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!hyundai) {
      setMarca('Hyundai');
    } else {
      setMarca('');
    }
  }

  const ivecoChanged = () => {
    setIveco(!iveco);
    setFiat(false);
    setHyundai(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!iveco) {
      setMarca('Iveco');
    } else {
      setMarca('');
    }
  }

  const volkswagenChanged = () => {
    setVolkswagen(!volkswagen);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!volkswagen) {
      setMarca('Volkswagen');
    } else {
      setMarca('');
    }
  }

  const kiaChanged = () => {
    setKia(!kia);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!kia) {
      setMarca('Kia');
    } else {
      setMarca('');
    }
  }

  const renaultChanged = () => {
    setRenault(!renault);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setMercedes(false);
    setChevrolet(false);
    setOther(false);
    if (!renault) {
      setMarca('Renault');
    } else {
      setMarca('');
    }
  }

  const mercedesChanged = () => {
    setMercedes(!mercedes);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setChevrolet(false);
    setOther(false);
    if (!mercedes) {
      setMarca('Mercedes');
    } else {
      setMarca('');
    }
  }

  const chevroletChanged = () => {
    setChevrolet(!chevrolet);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setOther(false);
    if (!chevrolet) {
      setMarca('Chevrolet');
    } else {
      setMarca('');
    }
  }

  const otherChanged = () => {
    setOther(!other);
    setFiat(false);
    setHyundai(false);
    setIveco(false);
    setVolkswagen(false);
    setKia(false);
    setRenault(false);
    setMercedes(false);
    setChevrolet(false);
    if (!other) {
      setMarca('Other');
    } else {
      setMarca('');
    }
  }

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={[css.container_direction, {marginTop: 20}]}>
        <Text style={[css.letra, css.text_veiculos, {width: 360, marginStart: 90}]}>Qual a marca do veículo?</Text>
        <View style={{flexDirection: 'column', maxWidth: '70%', marginRight: 60}}>
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={[css.alinhamentoRow, css.container_checkbox]}>
              <Checkbox style={css.checkbox} value={fiat} onValueChange={fiatChanged}
                                             color={fiat ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Fiat</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={hyundai} onValueChange={hyundaiChanged}
                                             color={hyundai ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Hyundai</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={iveco} onValueChange={ivecoChanged}
                                             color={iveco ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Iveco</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={volkswagen} onValueChange={volkswagenChanged}
                                             color={volkswagen ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Volkswagen</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={kia} onValueChange={kiaChanged}
                                             color={kia ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Kia</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={renault} onValueChange={renaultChanged}
                                             color={renault ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Renault</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={mercedes} onValueChange={mercedesChanged}
                                             color={mercedes ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox, {width: 130}]}>Mercedes-Benz</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={chevrolet} onValueChange={chevroletChanged}
                                             color={chevrolet ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Chevrolet</Text>
            </View>

            <View style={[css.alinhamentoRow, css.container_checkbox, css.space_between_checkboxes]}>
              <Checkbox style={css.checkbox} disable value={other} onValueChange={otherChanged}
                                             color={other ? '#FFC100' : '#FFC100'}/>
              <Text style={[css.text_checkbox]}>Outro</Text>
            </View>
          </ScrollView>
        </View>
      </View>

      {marca === '' &&
        <TouchableOpacity style={{bottom:65}}>
          <FontAwesome5 name='arrow-circle-right' size={60} color='lightgray' />
        </TouchableOpacity>
      }

      {marca !== '' &&
        <TouchableOpacity
          style={{bottom:65}}
          onPress={()=>props.navigation.navigate('CadVeiculo6', {
            type: props.route.params.type, port: props.route.params.port,
            weight: props.route.params.weight, placa: props.route.params.placa,
            marca: marca
          })}>
          <FontAwesome5 name='arrow-circle-right' size={62} color='#ff8c00' />
        </TouchableOpacity>
      }

    </View>

    );
}

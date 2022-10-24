import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,
         TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';

/* Tela com informações da viagem e do motorista */

export default function StatusFrete (props) {

  const [data,setData] = useState('none');

  useEffect(()=> {
    driverProfile(); // dados do motorista
  },[]);

  async function deleteFrete() { // deletar viagem (*)
    let response = await fetch(`${config.urlRoot}deleteTravel`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.route.params.idTravel,
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  async function driverProfile() {
    let response = await fetch(`${config.urlRoot}driverProfile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.route.params.codUser,
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      setData(json);
    }
  }

  return (
    <View style={[css.container]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={{alignItems: 'center'}}>
        <Text style={[css.letra3]}>Detalhes do frete</Text>

        { props.route.params.status === 0 &&
          <View style={[css.alinhamentoRow, {marginTop: 30}]}>
            <Image source={require('../../../assets/img/relogio.png')} style={{height: 25, width: 25}}/>
            <Text>    Aguardando aprovação do motorista</Text>
          </View>
        }

        { props.route.params.status === 1 &&
          <View style={[css.alinhamentoRow, {marginTop: 30}]}>
            <Text>  Visualize os detalhes do seu frete</Text>
          </View>
        }

        <View style={[css.risquinho]}></View>
      </View>

      <View style={{marginTop: 20}}>
        <View style={[css.box_profile, {backgroundColor: '#FFDAB9'}]}>
          <View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>qua. 08 setembro, 08:00</Text>
            </View>

            <View style={[css.alinhamentoRow, {marginTop: 20}]}>
              <View>
                <Image source={require('../../../assets/img/location_on.png')}/>
              </View>
              <Text>  {props.route.params.enderecoOrigem}</Text>
            </View>

            <View style={css.alinhamentoRow}>
              <View>
                <Image source={require('../../../assets/img/location_off.png')}/>
              </View>

              <Text>  {props.route.params.enderecoDestino}</Text>
              <View style={css.alinhamentoRow}>
                <Text style={{marginLeft: 70, fontSize: 17}}>R$ {props.route.params.preco}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={css.faixa}></View>
      <View style={[css.box_profile, {backgroundColor: '#FFDAB9',  width: 360, marginTop: -20, height: 270}]}>
        <View style={[css.alinhamentoRow, {alignItems: 'center'}]}>
          <Image style={{opacity: 1}} source={require('../../../assets/img/profile_unknow.png')}/>
          <Text style={[css.perfil_name, {color: 'black'}]}>   {props.route.params.nome}</Text>

          <View style={[css.alinhamentoRow, {marginLeft: 20}]}>
            <Image source={require('../../../assets/img/estrelinha.png')} style={{height: 30, width: 30}}/>
            <Text style={{fontSize: 20}}>   4.5</Text>
          </View>
        </View>

        <Text style={[css.letra2, {color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize: 29}]}>Veículo</Text>
          <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 10}]}>
            <View style={css.alinhamentoRow}>
              <Text style={{fontWeight: '700'}}>Porte : </Text>
              <Text>{data.porte}</Text>
            </View>

            <View style={css.alinhamentoRow}>
              <Text style={{fontWeight: '700'}}>Tipo : </Text>
              <Text>{data.tipo}</Text>
            </View>
          </View>

          <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 10}]}>
            <View style={css.alinhamentoRow}>
              <Text style={{fontWeight: '700'}}>Peso máximo : </Text>
              <Text>{data.pesoMax}T</Text>
            </View>

            <View style={css.alinhamentoRow}>
              <Text style={{fontWeight: '700'}}>Modelo : </Text>
              <Text>{data.modelo}</Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity>
            <Text style={{textDecorationLine: 'underline', fontSize: 18, fontWeight: '400'}}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: -25}}>
          <TouchableOpacity
            onPress={()=>deleteFrete()}
            style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00'}]}>
            <Text style={css.letra}>Cancelar reserva</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

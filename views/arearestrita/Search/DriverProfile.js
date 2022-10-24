import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Tela com dados do motorista */

export default function DriverProfile(props) {

  const [data,setData] = useState('none');
  const [codCliente,setCodCliente] = useState('none');

  useEffect(()=> {
    sendForm(); // dados do motorista
    getId(); // busca por id do usuário logado
  },[]);

  async function getId() { // id do usuário logado
    let response = await AsyncStorage.getItem('userData');
    let json = await JSON.parse(response);
    if (json !== null) {
      setCodCliente(json.id);
    }
  }

  async function sendForm() { // dados do motorista
    let response = await fetch(`${config.urlRoot}driverProfile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.route.params.codMotorista,
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      setData(json);
    }
  }

  async function travelForm() {
    let response = await fetch(`${config.urlRoot}travelCreate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitudeOrigem: props.route.params.origem.latitude,
        longitudeOrigem: props.route.params.origem.longitude,
        latitudeDestino: props.route.params.destino.latitude,
        longitudeDestino: props.route.params.destino.longitude,
        enderecoOrigem: props.route.params.origem.title,
        enderecoDestino: props.route.params.destino.title,
        distancia: props.route.params.distancia,
        preco: props.route.params.preco,
        codMotorista: props.route.params.codMotorista,
        codCliente: codCliente,
        //data: props.route.params.data
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      props.navigation.navigate('WaitingApproval');
    }
  }

  return (
    <View style={[css.frete_screen, {height: '18%'}]}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={{alignItems: 'center'}}>
        <Image style={{marginTop: -22}} source={require('../../../assets/img/profile_unknow.png')}/>
        <Text style={[css.perfil_name, {bottom: 5}]}>{props.route.params.nome}</Text>
      </View>

      <View style={{flexDirection: "column"}}>
        <View style={[css.alinhamentoRow]}>
          <View style={{marginLeft: 20}}>
            <View style={[css.alinhamentoRow, {marginTop: 10}]}>
              <Image style={{width: 35, height: 35}} source={require('../../../assets/img/estrelinha.png')}/>
              <Text style={{fontSize: 21, fontWeight: 'bold'}}>   4.5</Text>

              <TouchableOpacity style={{marginStart: 28}}>
                <Text style={{textDecorationLine: 'underline', fontSize: 21, fontWeight: '400'}}>Ver avaliações</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', alignSelf: 'center', width: 330, marginTop: 20}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Faço fretes em toda São Paulo, {'\n'}
            do interior ao litoral paulista, além {'\n'}
            de realizar em outros estados como {'\n'}
            MG e RJ.
          </Text>
        </View>

        <View style={css.risquinho} />

        <Text style={[css.letra2, {color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize: 29}]}>Veículo</Text>

        <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 18}]}>
          <View style={css.alinhamentoRow}>
            <Text style={{fontWeight: '700'}}>Porte : </Text>
            <Text>{data.porte}</Text>
          </View>

        <View style={css.alinhamentoRow}>
          <Text style={{fontWeight: '700'}}>Tipo : </Text>
          <Text>{data.tipo}</Text>
        </View>
      </View>

      <View style={[css.alinhamentoRow, {justifyContent: 'space-around', marginTop: 18}]}>
        <View style={css.alinhamentoRow}>
          <Text style={{fontWeight: '700'}}>Peso máximo : </Text>
          <Text>{data.pesoMax}T</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <Text style={{fontWeight: '700'}}>Modelo : </Text>
          <Text>{data.modelo}</Text>
        </View>
      </View>

      <View style={css.risquinho}></View>

      <View style={[{alignItems: 'center', marginTop: 10}]}>
        <View style={css.alinhamentoRow}>
          <Text style={{fontWeight: 'bold', fontSize: 19}}>Valor : </Text>
          <Text style={{fontSize: 19}}>R$ {props.route.params.preco.replace('.', ',')}</Text>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 35}}>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline', fontSize: 18, fontWeight: '400'}}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: -10}}>
        <TouchableOpacity
          onPress={()=>travelForm()}
          style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00'}]}
        >
          <Text style={css.letra}>Reservar</Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  );
}

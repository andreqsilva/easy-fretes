import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../assets/css/Css';
import { StatusBar } from 'expo-status-bar';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import config from '../../../config/config.json';

/* Tela com informações da viagem e do cliente */

export default function StatusFreteMotorista (props) {

  const [status,setStatus] = useState(null);
  const [userData,setUserData] = useState('none');

  useEffect(()=> {
    getStatus(); // status da viavem
    getUser(); // dados do cliente
  },[]);

  async function getStatus() { // status da viagem (*)
    let response = await fetch(`${config.urlRoot}getTravel`, {
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
    let json = await response.json();
    if (json !== 'error') {
      setStatus(json.status);
    }
  }

  async function getUser() { // dados do cliente
    let response = await fetch(`${config.urlRoot}getUser`, {
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
      setUserData(json);
    }
  }

  async function freteStatus(newStatus) { // alterar status da viagem (*)
    let response = await fetch(`${config.urlRoot}freteStatus`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.route.params.idTravel,
        status: newStatus
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      props.navigation.navigate('StatusFreteMotorista');
    }
  }

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

  const Pendente = () => (
    <View style={[css.box_profile, {backgroundColor: '#FFDAB9', width: 360, marginTop: -20, height: 150}]}>
      <View style={[css.alinhamentoRow, {alignItems: 'center'}]}>
        <Image style={{opacity: 1}} source={require('../../../assets/img/profile_unknow.png')}/>
        <Text style={[css.perfil_name, {color: 'black'}]}>   {props.route.params.nome}</Text>

        <View style={[css.alinhamentoRow, {left: 90}]}>
          <Image source={require('../../../assets/img/estrelinha.png')} style={{height: 30, width: 30}}/>
          <Text style={{fontSize: 20}}>   4.5</Text>
        </View>
      </View>

      <View style={{marginStart: 230, marginTop: -20}}>
        <Text style={{fontWeight: 'bold'}}>2 avalizações</Text>
      </View>
    </View>
  );

  const Aprovado = () => (
    <View style={[css.box_profile, {backgroundColor: '#FFDAB9', width: 360, marginTop: -20, height: 250}]}>
      <View style={[css.alinhamentoRow, {alignItems: 'center'}]}>
        <Image style={{opacity: 1}} source={require('../../../assets/img/profile_unknow.png')}/>
        <Text style={[css.perfil_name, {color: 'black'}]}>   {props.route.params.nome}</Text>

        <View style={[css.alinhamentoRow, {left: 90}]}>
          <Image source={require('../../../assets/img/estrelinha.png')} style={{height: 30, width: 30}}/>
          <Text style={{fontSize: 20}}>   4.5</Text>
        </View>
      </View>

      <View style={{marginStart: 230, marginTop: -20}}>
        <Text style={{fontWeight: 'bold'}}>2 avalizações</Text>
      </View>

      <View style={{marginTop: 30}}>
        <View style={css.alinhamentoRow}>
          <Text style={css.size_dados}>Telefone : </Text>
          <Text style={css.size_dados}>   {userData.telefone}</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <Text style={css.size_dados}>E-mail : </Text>
          <Text style={css.size_dados}>        {userData.email}</Text>
        </View>

        <View style={css.alinhamentoRow}>
          <Text style={css.size_dados}>Idade : </Text>
          <Text style={css.size_dados}>         35 anos</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[css.initial_cadastro_white]}>
      <MenuAreaRestrita navigation={props.navigation}/>
      <View style={{alignItems: 'center'}}>
        <Text style={[css.letra3]}>Detalhes do frete</Text>

        { status !== null && status === 0 &&
          <View style={[css.alinhamentoRow, {marginTop: 30}]}>
            <Image source={require('../../../assets/img/relogio.png')} style={{height: 25, width: 25}}/>
            <Text>    Pedido pendente de aprovação</Text>
          </View>
        }

        { status !== null && status === 1 &&
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
              <Text>  São José dos Campos</Text>
            </View>

            <View style={css.alinhamentoRow}>
              <View>
                <Image source={require('../../../assets/img/location_off.png')}/>
              </View>

              <Text>  São Paulo</Text>

              <View style={css.alinhamentoRow}>
                <Text style={{left: 140, fontSize: 17}}>R$ {props.route.params.preco}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={css.faixa}></View>

      { status !== null && status === 0 &&
        <Pendente />
      }

      { status !== null && status === 1 &&
        <Aprovado />
      }

      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline', fontSize: 18, fontWeight: '400'}}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>

      { status !== null && status === 0 &&
        <View>
          <View style={{alignItems: 'center', marginTop: -25}}>
            <TouchableOpacity
              onPress={()=>freteStatus(1)}
              style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
              <Text style={css.letra}>Aprovar</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: -35}}>
            <TouchableOpacity
              onPress={()=>deleteFrete()}
              style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
              <Text style={css.letra}>Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>
      }

      { status !== null && status === 1 &&
        <View style={{alignItems: 'center', marginTop: -35}}>
          <TouchableOpacity
            onPress={()=>deleteFrete()}
            style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
            <Text style={css.letra}>Cancelar reserva</Text>
          </TouchableOpacity>
        </View>
      }

    </View>
  );
}

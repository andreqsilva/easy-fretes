import { Text, View, Image, TextInput, TouchableOpacity,
         TouchableWithoutFeedback, KeyboardAvoidingView, Modal} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { css } from '../../../assets/css/Css';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../../config/config.json';
import key from '../../../config/';

export default function Route(props) {

  const [address, setAddress] = useState('none');
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const mapEl = useRef(null);

  useEffect(()=> {
    getLocalization();
  },[]);

  async function getLocalization() {
    let response = await fetch(`${config.urlRoot}getLocalization`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.route.params.codLocalizacao,
      })
    }).catch(function(error) {
    	console.log('There has been a problem with your fetch operation: ' + error.message);
    });
    let json = await response.json();
    if (json !== 'error') {
      setAddress({
        enderecoOrigem: json.enderecoOrigem,
        enderecoDestino: json.enderecoDestino
      });
      setOrigin({
        latitude: json.latitudeOrigem,
        longitude: json.longitudeOrigem,
      });
      setDestination({
        latitude: json.latitudeDestino,
        longitude: json.longitudeDestino,
      });
    }
  }

  return (
    <View style={css.container}>
      <MenuAreaRestrita navigation={props.navigation}/>


    {
      <MapView
        style={{height: "40%"}}
        initialRegion={origin}
        showsUserLocation = {true}
        zoomEnabled = {true}
        loadingEnabled = {true}
        ref = {mapEl}
      >
        {destination &&
          <MapViewDirections
            origin = {origin}
            destination = {destination}
            apikey = {key.googleApi}
            strokeWidth = {4}
            strokeColor='orange'
            onReady = {result=>{
                mapEl.current.fitToCoordinates(
                  result.coordinates, {
                    edgePadding: {
                      top: 50,
                      bottom: 50,
                      left: 50,
                      right: 50
                    }
                  }
                )
            }}
          />
        }
      </MapView>
      }

      <View style={[css.alinhamentoRow, {marginTop: 50}]}>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <View style={[css.alinhamentoRow, {marginTop: 10, borderWidth: 0.7, borderRadius: 15}]}>
            <TouchableOpacity style={{marginStart: 0}}>
              <View style={[css.alinhamentoRow]}>
                <Image source={require('../../../assets/img/location2_on.png')}/>
                <Text style={{fontSize: 18, fontWeight: '400', padding: 4, width: '90%'}}>  Origem {address.enderecoOrigem}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[css.alinhamentoRow]}>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <View style={[css.alinhamentoRow, {marginTop: 10, borderWidth: 0.7, borderRadius: 15}]}>
            <TouchableOpacity style={{marginStart: 0}}>
              <View style={[css.alinhamentoRow]}>
                <Image source={require('../../../assets/img/where_to_go.png')}/>
                <Text style={{fontSize: 18, fontWeight: '400', padding: 4, width: '88%'}}> {address.enderecoDestino}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {props.route.params.type === 0 &&
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Checklist',
             {type: props.route.params.type, viagemId: props.route.params.viagemId})}
            style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
            <Text style={css.letra}>Visualizar Móveis</Text>
          </TouchableOpacity>
        </View>
      }

      {props.route.params.type === 1 &&
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Checklist',
             {type: props.route.params.type, viagemId: props.route.params.viagemId})}
            style={[css.button, {borderRadius: 8, backgroundColor: '#ff8c00', width: 300}]}>
            <Text style={css.letra}>Confirmar Rota</Text>
          </TouchableOpacity>
        </View>
      }

    </View>
  );
}

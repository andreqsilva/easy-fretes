import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../../assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../config';

export default function Search(props) {

  const mapEl = useRef(null);
  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);
  const [distance,setDistance] = useState(null);
  const [duration,setDuration] = useState(null);
  const [price,setPrice] = useState(null);
  const [adress,setAdress] = useState(null);

  console.log(props.navigation);

  return (

    <View style={css.container}>
    <Text style={{alignSelf: 'center'}}>EM CONSTRUÇÃO</Text>

      {destination &&
        <MapViewDirections
          origin = {origin}
          destination = {destination}
          apikey = {config.googleApi}
          onReady = {result=>{
            console.log(result.distance);
            console.log(result.duration);
            setDistance(result.distance);
            setDuration(result.duration);
            setPrice(result.duration*3);
          }}
        />
      }

      <View style={{
          height: '20%',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}>
        <Image style={{paddingVertical: 5, right: 5}}
          source={require('../../assets/img/frame-7.png')}
        />
        <Image
          source={require('../../assets/img/truck-icon.png')}
          style={{
            alignSelf: 'flex-end',
            bottom: 80,
            left: 5
          }}
        />
      </View>

      <View style={{height: '30%'}}>
        <Image
          source={require('../../assets/img/moving.png')}
          style={{
            bottom: 60
          }}
        />
      </View>


      <View style={{
        //backgroundColor: 'green',
        height: '40%',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <GooglePlacesAutocomplete
          placeholder='De (insira o endereço completo)'
          fetchDetails={true}
          onPress = {(data, details = null) => {
            setAdress(data.description);
            setOrigin({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
          console.log(details);
          }}
          query={{
              key: config.googleApi,
              language: 'pt-br',
          }}
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          styles = {css.search_autocomplete}
        />

        <GooglePlacesAutocomplete
          placeholder = 'Para (insira o endereço completo)'
          onPress = {(data, details = null) => {
            setAdress(data.description);
            setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
          console.log(details);
          }}
          query={{
              key: config.googleApi,
              language: 'pt-br',
          }}
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          styles = {css.search_autocomplete}
        />

        <TouchableOpacity style={{
          backgroundColor: 'rgba(255, 108, 1, 1)',
          color: '#fff',
          width: '80%',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          //borderRadius: 55,
          //marginBottom: 180,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          shadowColor: 'black',
          elevation: 3,
          bottom: 10,
        }} >
          <Text style={css.letra}>Procurar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

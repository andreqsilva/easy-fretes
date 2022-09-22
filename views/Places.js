import React from 'react';
import { View, Text, Image } from 'react-native';
import {useState, useEffect, useRef} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../config';
import { css } from '../assets/css/Css';

export default function Places() {

  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);
  const [distance,setDistance] = useState(null);
  const [duration,setDuration] = useState(null);

  return (

    <View style={css.container}>

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
          }}
        />
      }

      <View style={{
        height: '20%',
        backgroundColor: 'gray'
      }} />

      <View style={{
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'orange',
        alignItems: 'center'
      }}>

        <GooglePlacesAutocomplete
          placeholder='De'
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details.geometry);
            setOrigin({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br'
          }}
          styles={{
            container: {position: 'relative', width: '80%'},
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Para'
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details.geometry);
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            });
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br'
          }}
          styles={{
            container: {position: 'relative', width: '80%'},
          }}
        />



      </View>

      <View style={{
        height: '40%',
        backgroundColor: 'green',
        alignItems: 'center',

      }}>
        <Image source={require('../assets/img/frame-7.png')} />
        <Image source={require('../assets/img/frame-7.png')} />
        <Image source={require('../assets/img/frame-7.png')} />
        <Image source={require('../assets/img/frame-7.png')} />
      </View>

    </View>

  );
}

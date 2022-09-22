import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../config';
import { MaterialIcons } from '@expo/vector-icons';

export default function Search(props) {

  const mapEl = useRef(null);
  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);
  const [distance,setDistance] = useState(null);
  const [duration,setDuration] = useState(null);
  const [price,setPrice] = useState(null);
  const [adress,setAdress] = useState(null);

  //console.log(props);

  useEffect(()=>{
      (async function(){

          //const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
          let {status} = await Location.requestForegroundPermissionsAsync();
          if (status === 'granted') {
              let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
              console.log(location);
              setOrigin({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421
              })
          } else {
              throw new Error('Location permission not granted');
          }
      })();
  },[]);

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
            setPrice(result.duration*3);
          }}
        />
      }

      <View style={{height: '20%', flexDirection: 'column', alignItems: 'center', backgroundColor: 'green'}}>
        <Image style={{paddingVertical: 5}}
          source={require('../assets/img/frame-7.png')}
        />
        <Image
          source={require('../assets/img/truck-icon.png')}
          style={{
            alignSelf: 'flex-end',

          }}
        />
      </View>

      <View style={{height: '40%'}}>
        <Image
          source={require('../assets/img/moving.png')}
          style={{

          }}
        />
      </View>


      <View style={css.search}>

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

        {distance &&
          <View style={css.distance}>
            <Text style={css.distance_text}>Distância: {distance.toFixed(2).replace(',', ',')}km</Text>
            <TouchableOpacity style={css.price} onPress={() => props.navigation.navigate('Checkout',{price: price.toFixed(2), adress: adress})}>
              <Text style={css.price_text}><MaterialIcons name="payment" size={24} color="" />Pagar R&{price.toFixed(2).replace('.', ',')}</Text>
            </TouchableOpacity>
          </View>
        }

      </View>

    </View>
  );
}
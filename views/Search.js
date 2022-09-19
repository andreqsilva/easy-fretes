import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
  const [price,setPrice] = useState(null);
  const [adress,setAdress] = useState(null);

  //console.log(props);

  useEffect(()=>{
      (async function(){
          //const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
          let {status} = await Location.requestForegroundPermissionsAsync();
          if (status === 'granted') {
              let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
              setOrigin({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.000922,
                  longitudeDelta: 0.000421
              })
          } else {
              throw new Error('Location permission not granted');
          }
      })();
  },[]);

  return (
    <View style = {css.container}>
      <MapView
        style = {css.map}
        initialRegion = {origin}
        showsUserLocation = {true}
        zoomEnabled = {true}
        loadingEnabled = {true}
        ref = {mapEl}
      >

      {destination &&
        <MapViewDirections
            origin = {origin}
            destination = {destination}
            apikey = {config.googleApi}
            strokeWidth = {3}
            onReady = {result=>{
                //console.log(result.distance);
                //console.log(result.duration);
                setDistance(result.distance);
                setPrice(result.distance * 3);
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

      <View style={css.search}>
        <GooglePlacesAutocomplete
          placeholder = 'Para onde é o seu frete?'
          onPress = {(data, details = null) => {
            setAdress(data.description);
            setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
              });
          //console.log(details);
          }}
          query={{
              key: config.googleApi,
              language: 'pt-br',
          }}
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          styles = {{
            listView:{backgroundColor: 'gray', zIndex: 10},
            container: {position: 'absolute', width: '100%'}
          }}
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

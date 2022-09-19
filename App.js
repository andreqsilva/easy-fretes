import React, {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { css } from './assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

import config from './config';

export default function App() {

  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);

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
    <View style={css.container}>
      <MapView
        style={css.map}
        initialRegion={origin}
        showUserLocation={true}
        loadingEnabled={true}
      >

      {destination &&
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={3}
            onReady={result=>{
                console.log(result);
            }}
        />
      }

      </MapView>

      <View style={css.search}>
        <GooglePlacesAutocomplete
          placeholder = 'Para onde é o seu frete?'
          onPress={(data, details = null) => {
          setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
          });
          console.log(details.geometry);
        }}
        query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{listView:{height:100}}}
        />
      </View>

    </View>
  );
}

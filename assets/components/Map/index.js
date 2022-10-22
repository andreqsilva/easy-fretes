import React, {useState, useEffect, useRef, Fragment} from 'react';
import { View, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import SearchLocation from '../SearchLocation';
import Directions from '../Directions';
import Details from '../Details';

import markerImage from '../../img/where_to_go.png'

export default function Map() {

  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);

  useEffect(()=>{
    (async function(){
      //const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        //console.log(location);
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        })
      } else {
          throw new Error('Location permission not granted');
      }
  })();
 },[]);

/*
 handleLocationSelected = (data, {geometry}) => {
   const {location: {lat: latitude, lgn: longitude}} = geometry;
   setDestination({
     latitude,
     longitude,
     title: data.structured_formatting.main_text
   });
 }
*/
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={origin}
        showsUserLocation
        loadingEnabled
      >
      {
        <Fragment>
          <Directions
            origin={origin}
            destination={{latitude: -23.2166661, longitude: -45.89219110000001}}
            onReady={() => {}}
          />
          <Marker
            coordinate={{latitude: -23.2166661, longitude: -45.89219110000001}}
            anchor={{ x: 0, y: 0}} image={markerImage}
          >
          </Marker>
        </Fragment>
      }
      </MapView>

      <SearchLocation origin={origin}/>
    </View>


  );

}

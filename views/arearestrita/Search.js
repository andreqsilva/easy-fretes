import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { css } from '../../assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

export default function Search({navigation}) {

  const mapEl = useRef(null);
  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);
  const [distance,setDistance] = useState(null);
  const [duration,setDuration] = useState(null);
  const [price,setPrice] = useState(null);
  const [adressOrigin,setAdressOrigin] = useState(null);
  const [adressDestination,setAdressDestination] = useState(null);

  //console.log(props.navigation);

  return (

    <SafeAreaView style={css.container}>

    <View style={css.back_menu}>
      <TouchableOpacity style={css.back_button} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-left' size={32} color='black' />
      </TouchableOpacity>
    </View>

    <Text style={{alignSelf: 'center'}}>EM CONSTRUÇÃO</Text>

      {destination &&
        <MapViewDirections
          origin = {origin}
          destination = {destination}
          apikey = {config.googleApi}
          onReady = {result=>{
            setDistance(result.distance);
            setPrice(result.distance * 6);
            //console.log(result.distance);
            //console.log(result.duration);
            setDuration(result.duration);
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
          types='adress'
          listViewDisplayed='auto'
          //keyboardAppearance={'light'}
          onPress = {(data, details = null) => {
            setAdressOrigin(data.description);
            setOrigin({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
          //console.log(details);
          }}
          query={{
              key: config.googleApi,
              language: 'pt-br',
              components: 'country:br'
          }}
          enablePoweredByContainer = {false}
          //fetchDetails = {true}
          styles = {css.search_autocomplete}
        />

        <GooglePlacesAutocomplete
          placeholder = 'Para (insira o endereço completo)'
          onPress = {(data, details = null) => {
            setAdressDestination(data.description);
            setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
          //console.log(details);
          }}
          query={{
              key: config.googleApi,
              language: 'pt-br',
              components: 'country:br'
          }}
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          styles = {css.search_autocomplete}
        />

        <TouchableOpacity
          onPress={()=>navigation.navigate('Checkout',
                      {price: price.toFixed(2).replace('.', ','),
                       distance: distance.toFixed(2).replace('.', ','),
                       origin: adressOrigin, destination: adressDestination,
                       duration: duration.toFixed(0)})}
          style={{
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
          }}
        >
          <Text style={css.letra}>Procurar</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

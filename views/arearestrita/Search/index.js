import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
         ScrollView,  Image, KeyboardAvoidingView } from 'react-native';
import { css } from '../../../assets/css/Css';
//import MapView from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';
//import * as Location from 'expo-location';
//import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../../../config';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
//import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';
//import Map from '../../../assets/components/Map';
//import SearchLocation from '../../../assets/components/SearchLocation';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

/* Tela de busca por endereço de origem */

export default function Search(props) {

  //const mapEl = useRef(null);
  const [origin,setOrigin] = useState(null);
  const [searchFocused, setSearchFocused] = useState(null);

/*
  useEffect(()=> {
    if (origin !== null) {
      props.navigation.navigate('SearchDestination', { origem: origin });
    }
  },[origin]);
*/
  return (
    /*
      <View style={css.container}>

        <View style={{
          backgroundColor: 'grey',
          height: '20%',
          //flexDirection: 'column',
          alignItems: 'center',
        }}>
          <SearchLocation num={1}/>
        </View>
        <View style={{
          backgroundColor: 'green',
          height: '20%',
          //flexDirection: 'column',
          alignItems: 'center',
        }}>
          <SearchLocation num={2}/>
        </View>

      </View>
  */
      //<Map />

    <SafeAreaView style={css.container}>

      {/*destination &&
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
      */}

      <View style={{
          height: '20%',
          //backgroundColor: 'blue',
          flexDirection: 'column',
          alignItems: 'center',
          //position: 'relative',
          marginTop: 50
        }}>
        <Text style={[css.letra_laranja, {fontSize: 25}]}>Fretes com preços{'\n'}baixos para você</Text>
        <Image
          source={require('../../../assets/img/truck-icon.png')}
          style={{ alignSelf: 'flex-end', bottom: 50, left: 5
          }}
        />
      </View>

      <View style={{height: '60%'}}>
        <GooglePlacesAutocomplete
          placeholder='> De (insira o endereço completo)'
          placeholderTexColor='#333'
          onPress={(data, details = null) =>
            setOrigin({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134,
              title: data.structured_formatting.main_text
            })
          }
          query={{
            key: config.googleApi,
            language: 'pt-br',
            components: 'country:br'
          }}
          textInputProps={{
            onFocus: () => {setSearchFocused(true)},
            onBlur: () => {setSearchFocused(false)},
            autoCaptalize: 'none',
            autoCorret: false
          }}
          listViewDisplayed={searchFocused}
          fetchDetails // informações adicionais dos locais
          enablePoweredByContainer={false}
          styles={{
            container: {
              position: 'absolute',
              top: Platform.select({ ios: 60, android: 40 }),
              width: '100%'
            },
            textInputContainer: {
              flex: 1,
              backgroundColor: 'transparent',
              height: 54,
              marginHorizontal: 20,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              backgroundColor: 'lightgrey',
              height: 60,
              margin: 0,
              borderRadius: 10,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRigth: 20,
              paddingLeft: 20,
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { x: 0, y: 0 },
              shadowRadius: 15,
              borderWidth: 1,
              borderColor: '#DDD',
              fontSize: 18,
            },
            listView: {
              borderWidth: 1,
              borderColor: '#DDD',
              backgroundColor: '#FFF',
              marginHorizontal: 20,
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { x: 0, y: 0 },
              shadowRadius: 15,
              marginTop: 10
            },
            description: {
              fontSize: 16,
            },
            row: {
              padding: 20,
              height: 58
            }
          }}
        >
        </GooglePlacesAutocomplete>
      </View>


      {!searchFocused && origin &&
        <TouchableOpacity onPress={()=>props.navigation.navigate('SearchDestination', {
             origem: origin })}
          style={[css.button, {borderRadius: 8, bottom: 30, alignSelf: 'center', backgroundColor: '#ff8c00', width: 300}]}>
          <Text style={css.letra}>Continuar</Text>
        </TouchableOpacity>
      }

      {!searchFocused && !origin &&
        <TouchableOpacity
          style={[css.button, {borderRadius: 8, bottom: 30, alignSelf: 'center', backgroundColor: 'lightgray', width: 300}]}>
          <Text style={css.letra}>Continuar</Text>
        </TouchableOpacity>
      }

    </SafeAreaView>

  );
}

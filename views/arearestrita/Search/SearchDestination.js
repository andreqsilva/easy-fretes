import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { css } from '../../../assets/css/Css';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../../../config';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';

/* Tela de busca por endereço de destino */

export default function SearchDestination(props) {
  const [destination,setDestination] = useState(null);
  const [adressDestination,setAdressDestination] = useState(null);
  const [searchFocused, setSearchFocused] = useState(null);
  const mapEl = useRef(null);
/*
  useEffect(()=> {
    if (destination !== null) {
      props.navigation.navigate('PickDate', { origem: props.route.params.origem,
                                             destino: destination });
    }
  },[destination]);
*/
  return (
    <SafeAreaView style={css.container}>

      {/*<View style={{
          height: '20%',
          //backgroundColor: 'blue',
          flexDirection: 'column',
          alignItems: 'center',
          //position: 'relative',

        }}>
        <Text style={[css.letra_laranja, {fontSize: 25}]}>Fretes com preços{'\n'}baixos para você</Text>
        <Image
          source={require('../../../assets/img/truck-icon.png')}
          style={{ alignSelf: 'flex-end', bottom: 50, left: 5
          }}
        />
      </View>*/}

      <MapView
        style={{flex: 1}}
        initialRegion={props.route.params.origem}
        showsUserLocation = {true}
        zoomEnabled = {true}
        loadingEnabled = {true}
        ref = {mapEl}
      >
        {destination &&
          <MapViewDirections
            origin = {props.route.params.origem}
            destination = {destination}
            apikey = {config.googleApi}
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

      <TouchableOpacity
        style={css.back_button, {position: 'absolute', top: 45, left: 10}}
        onPress={()=>props.navigation.goBack()}>
        <Icon name='arrow-left' size={32} color='black' />
      </TouchableOpacity>

      <GooglePlacesAutocomplete
        placeholder='> Para (insira o endereço completo)'
        placeholderTexColor='#333'
        onPress={(data, details = null) =>
          setDestination({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
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
            top: Platform.select({ ios: 110, android: 90 }),
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

      {!searchFocused && destination &&
        <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate('PickDate', {
                                      origem: props.route.params.origem, destino: destination})}
            style={[css.button, {borderRadius: 8, bottom: 30, alignSelf: 'center', backgroundColor: '#ff8c00', width: 300}]}>
            <Text style={css.letra}>Continuar</Text>
          </TouchableOpacity>
        </View>
        }

      {!searchFocused && !destination &&
        <TouchableOpacity
          style={[css.button, {borderRadius: 8, bottom: 30, alignSelf: 'center', backgroundColor: 'lightgray', width: 300}]}>
          <Text style={css.letra}>Continuar</Text>
        </TouchableOpacity>
      }

    </SafeAreaView>
  );
}

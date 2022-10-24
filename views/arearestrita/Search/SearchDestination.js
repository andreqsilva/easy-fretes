import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { css } from '../../../assets/css/Css';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../../../config';
import MenuAreaRestrita from '../../../assets/components/MenuAreaRestrita';

/* Tela de busca por endereço de destino */

export default function SearchDestination(props) {
  const [destination,setDestination] = useState(null);
  const [adressDestination,setAdressDestination] = useState(null);
  const [searchFocused, setSearchFocused] = useState(null);

  useEffect(()=> {
    if (destination !== null) {
      props.navigation.navigate('PickDate', {origem: props.route.params.origem,
                                             destino: destination});
    }
  },[destination]);

  return (
    <View style={css.container}>
      <MenuAreaRestrita navigation={props.navigation}/>

      <View style={{
          height: '20%',
          //backgroundColor: 'blue',
          flexDirection: 'column',
          alignItems: 'center',
          //position: 'relative',
          marginTop: 20
        }}>
        <Text style={[css.letra_laranja, {fontSize: 25}]}>Fretes com preços{'\n'}baixos para você</Text>
        <Image
          source={require('../../../assets/img/truck-icon.png')}
          style={{ alignSelf: 'flex-end', bottom: 60, left: 5
          }}
        />
      </View>

      <View style={{height: '60%'}}>
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

    </View>
  );
}

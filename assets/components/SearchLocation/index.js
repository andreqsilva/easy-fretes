import React, {useState, useEffect, useRef} from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../../../config';
import Directions from '../Directions';

export default function SearchLocation(props) {
  const [destination, setDestination] = useState(null);
  const [searchFocused, setSearchFocused] = useState(null);

  return (

    <GooglePlacesAutocomplete
      placeholder='Para onde?'
      placeholderTexColor='#333'
      onPress={(data, details = null) =>
        setDestination({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
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
          //elevation: 5,
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
  );
}

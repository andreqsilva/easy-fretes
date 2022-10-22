import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../../config';

export default function Directions({ destination, origin, onReady }) {
  console.log(origin, destination);
  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      onReady={onReady}
      apikey={config.googleApi}
      strokeWidth={3} // largura da linha
      strokeColor='#ffb449'
    />
  );
}

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const MyMap = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const onPlaceChanged = (place) => {
    console.log('Place:', place);
    if (place.geometry) {
      setCoordinates({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    } else {
      console.log('No details available for input: ' + place);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <Autocomplete onPlaceChanged={onPlaceChanged}>
        <input type='text' placeholder='Enter a location' />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '400px' }}
        zoom={10}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
      >
        {' '}
      </GoogleMap>
    </LoadScript>
  );
};
export default MyMap;

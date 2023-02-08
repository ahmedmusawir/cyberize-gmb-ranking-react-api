import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const MyMap = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace());
      setLocation(autocomplete.getPlace());
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const setLocation = (place) => {
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
      <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
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

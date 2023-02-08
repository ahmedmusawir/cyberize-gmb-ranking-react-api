import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const PageOne = () => {
  const [place, setPlace] = useState('atlanta');
  const [coordinates, setCoordinates] = useState({});

  // THIS ONE WILL UPDATE THE CURRENT LOCATION AT EVERY REFRESH
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <Autocomplete
        onLoad={(autocomplete) => console.log(autocomplete)}
        onPlaceChanged={(place) => setPlace(place)}
      >
        <input type='text' />
      </Autocomplete>

      {place && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <div>{place.name}</div>
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default PageOne;

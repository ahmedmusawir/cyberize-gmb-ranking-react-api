import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const PageOne = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    setCoordinates({ lat: 11.847676, lng: 109.095887 });
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      {coordinates && (
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '400px' }}
          zoom={10}
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
        >
          {console.log('Coordinates:', coordinates)}
        </GoogleMap>
      )}
    </LoadScript>
  );
};
export default PageOne;

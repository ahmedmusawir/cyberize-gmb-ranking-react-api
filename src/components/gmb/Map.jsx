/* eslint-disable */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  return (
    <div>
      {console.log('Coordinates:', coordinates)}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={{
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: false,
          disableDefaultUI: true,
          zoomControl: false,
        }}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;

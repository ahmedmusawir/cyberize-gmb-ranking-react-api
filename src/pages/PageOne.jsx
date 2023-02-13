import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from '@react-google-maps/api';
import { Container, Row, Box } from '../components/';

const MyMap = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [placeId, setPlaceId] = useState('');

  const onLoad = (autoC) => {
    // console.log('autoC', autoC);
    return setAutocomplete(autoC);
  };

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
      setPhotos(place.photos);
      console.log('Photos:', place.photos);
      setIcon(place.icon);
      setName(place.name);
      setPlaceId(place.place_id);
    } else {
      console.log('No details available for input: ' + place);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <Container>
        <section
          style={{ display: 'flex', flexDirection: 'column', width: '95%' }}
        >
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <input
              type='text'
              placeholder='Enter a location'
              style={{
                border: '5px solid skyblue',
                width: '300px',
                marginBottom: '1rem',
              }}
            />
          </Autocomplete>

          <GoogleMap
            mapContainerStyle={{
              height: '400px',
            }}
            zoom={12}
            center={{ lat: coordinates.lat, lng: coordinates.lng }}
          >
            <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
          </GoogleMap>
        </section>

        {autocomplete && (
          <Box twClasses={'min-w-full text-center prose my-5'}>
            <img src={icon} alt='' className='w-10 mx-auto' />
            <h2>
              Images from: <span className='text-red-600'>{name}</span>
            </h2>
            <h2>
              Place ID: <span className='text-red-600'>{placeId}</span>
            </h2>
            <h4>Longitude: {coordinates.lng}</h4>
            <h4>Latitude: {coordinates.lat}</h4>
          </Box>
        )}
        <Row twClasses={'grid gap-5 grid-auto-fit'}>
          {photos &&
            photos.map((photo, i) => {
              return (
                <>
                  <Box
                    twClasses={'p-4 border border-cyan-300 shadow-xl'}
                    key={i}
                  >
                    <img
                      src={photo.getUrl()}
                      className='mb-3 min-w-full rounded-lg'
                      alt=''
                    />
                  </Box>
                </>
              );
            })}
        </Row>
      </Container>
    </LoadScript>
  );
};
export default MyMap;

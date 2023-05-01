import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import { Row, Box } from '../components/';

const MyMap = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState(null);
  const [photos, setPhotos] = useState([]);

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
    } else {
      console.log('No details available for input: ' + place);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
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
          zoom={10}
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
        >
          {' '}
        </GoogleMap>

        <Row twClasses={'min-w-full text-center prose my-5'}>
          <h2>Tailwind Grid with Plugin</h2>
        </Row>
        {photos &&
          photos.map((photo) => {
            return (
              <>
                <Row twClasses={'grid gap-5 grid-auto-fit'}>
                  {/* <Box twClasses={'border border-cyan-300 shadow-xl w-54'}> */}
                  <img
                    src={photo.getUrl()}
                    className='mb-3 rounded-full'
                    alt=''
                    width='300px'
                  />
                  {/* <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Possimus et, ex eum rem mollitia totam eius ad, sapiente
                      eos maiores voluptatum, explicabo harum quos dolores nemo
                      eaque reprehenderit quo. Iure.
                    </p> */}
                  {/* </Box> */}
                </Row>
              </>
            );
          })}
      </section>
    </LoadScript>
  );
};
export default MyMap;

import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  InfoWindow,
  InfoBox,
} from '@react-google-maps/api';
import { Container, Row, Box } from '../components/';
// import rankingData from '../data/data-3';
import rankingData from '../data/data-3-radius-3';
// import rankingData from '../data/data-5';
// import rankingData from '../data/data-5-radius-5';
//
const RankingDataTest = () => {
  // console.log('Local Ranking data:', rankingData);
  const lngDemo = -121.938314;
  const latDemo = 37.341759;
  const [coordinates, setCoordinates] = useState({
    lat: latDemo,
    lng: lngDemo,
  });

  const center = {
    lat: latDemo,
    lng: lngDemo,
  };

  const options = { closeBoxURL: '', enableEventPropagation: true };

  const onLoad = (infoBox) => {
    // console.log('infoBox: ', infoBox);
  };

  rankingData.data.results.map((location) => {
    console.log('Location Lat', location);
    // console.log('Location Lat', location.lat);
    // console.log('Location Lng', location.lng);
    return location;
  });
  return (
    <div>
      <h1>RankingDataTest</h1>
      <Container FULL={false}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={['places']}
        >
          <Box twClasses={'min-w-full h-full border bg-blue-300'}>
            <GoogleMap
              mapContainerStyle={{ height: '80vh', width: '95vw' }}
              zoom={11}
              center={{ lat: coordinates.lat, lng: coordinates.lng }}
            >
              {rankingData.data.results.map((location) => (
                <InfoBox
                  key={location.lat + location.lng}
                  position={{ lat: location.lat, lng: location.lng }}
                  onLoad={onLoad}
                  options={options}
                >
                  <div className='w-8 h-8 border-2 border-red-500 rounded-full m-2 relative'>
                    <span className='text-lg font-bold absolute left-2'>
                      {location.rank}
                    </span>
                  </div>
                </InfoBox>
              ))}
            </GoogleMap>
          </Box>
        </LoadScript>
      </Container>
    </div>
  );
};

export default RankingDataTest;

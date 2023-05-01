import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  InfoBox,
} from '@react-google-maps/api';
import { Container, Row, Box } from '../components/';
import rankingData from '../data/data';
//
const RankingDataTest = () => {
  // console.log('Local Ranking data:', rankingData);
  const lngDemo = -121.938314;
  const latDemo = 37.341759;
  const [coordinates, setCoordinates] = useState({
    lat: latDemo,
    lng: lngDemo,
  });

  rankingData.data.results.map((location) => {
    console.log('Location Lat', location.lat);
    console.log('Location Lng', location.lng);
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
              mapContainerStyle={{ height: '600px', width: '90vw' }}
              zoom={12}
              center={{ lat: coordinates.lat, lng: coordinates.lng }}
            >
              {rankingData.data.results.map((location) => (
                <Marker
                  key={location.lat + location.lng}
                  position={{ lat: location.lat, lng: location.lng }}
                >
                  <div className='w-10 h-20 bg-red-500'>Moose</div>
                </Marker>
              ))}
            </GoogleMap>
          </Box>
        </LoadScript>
      </Container>
    </div>
  );
};

export default RankingDataTest;

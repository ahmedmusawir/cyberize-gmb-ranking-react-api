import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from '@react-google-maps/api';
import { Container, Row, Box } from '../components/';
import { useLazyGetLocalRankingQuery } from '../services/rankingApi';
// import rankingData from '../data/data';
//
const RankingDataTest = () => {
  // DATA FROM RAPID API
  const placeId = 'ChIJp6M9fR9PzDERFSVQLbGfznU';
  // const placeId = 'ChIJoejvAr3Mj4ARtHrbKxtAHXI';
  const query = 'web design';
  const lngDemo = -121.938314;
  const latDemo = 37.341759;
  const [coordinates, setCoordinates] = useState({
    lat: latDemo,
    lng: lngDemo,
  });

  const [trigger, { data: rankQueryResults, isLoading, error }] =
    useLazyGetLocalRankingQuery({
      placeId,
      query,
      lat: latDemo,
      lng: lngDemo,
    });

  const getApiData = () => {
    trigger();
    console.log('Rank Data on btn click', rankQueryResults);
  };
  return (
    <div>
      <Container FULL={false}>
        <h1>RankingDataTest</h1>
        <button className='btn' onClick={getApiData}>
          Get Data
        </button>
        {/* <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={['places']}
        >
          <Box twClasses={'min-w-full h-full border bg-blue-300'}>
            <GoogleMap
              mapContainerStyle={{ height: '600px', width: '90vw' }}
              zoom={12}
              center={{ lat: coordinates.lat, lng: coordinates.lng }}
            >
              {' '}
              <div className='w-10 h-20 bg-red-500'>Moose</div>
            </GoogleMap>
          </Box>
        </LoadScript> */}
      </Container>
    </div>
  );
};

export default RankingDataTest;

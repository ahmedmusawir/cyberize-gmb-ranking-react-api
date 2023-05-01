import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from '@react-google-maps/api';
import { Container, Row, Box } from '../components/';
import rankingData from '../data/data';
//
const RankingDataTest = () => {
  // DATA FROM RAPID API
  //   const placeId = 'ChIJp6M9fR9PzDERFSVQLbGfznU';
  // const placeId = 'ChIJoejvAr3Mj4ARtHrbKxtAHXI';
  //   const query = 'movies';
  const lngDemo = -121.938314;
  const latDemo = 37.341759;
  const [coordinates, setCoordinates] = useState({
    lat: latDemo,
    lng: lngDemo,
  });

  //   const { data, isFetching } = useGetLocalRankingQuery({
  //     placeId,
  //     query,
  //     lat,
  //     lng,
  //   });
  //   console.log(data);
  return (
    <div>
      <h1>RankingDataTest</h1>
      <Container FULL={false}>
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

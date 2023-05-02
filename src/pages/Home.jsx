import React, { useState, useEffect } from 'react';
import { Container, Row, Box, RankInfoBox } from '../components';
import { Audio } from 'react-loader-spinner';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import { useLazyGetLocalRankingQuery } from '../services/rankingApi';
import rankingData from '../data/rankingData.json';
import './Home.scss';

const HomePage = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [placeId, setPlaceId] = useState('');
  const [keyword, setKeyword] = useState(null);
  const [unit, setUnit] = useState('mi');
  const [radius, setRadius] = useState(3);
  const [gridSize, setGridSize] = useState(3);

  //RIK QUERY TO BRING LOCAL RANKING API DATA
  const [getData, { data, isFetching }] = useLazyGetLocalRankingQuery();

  // THIS ONE WILL UPDATE THE CURRENT LOCATION AT EVERY REFRESH
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // GOOGLE MAP CREATION
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
      setPlaceId(place.place_id);
    } else {
      console.log('No details available for input: ' + place);
    }
  };

  const handleApiData = (e) => {
    const lat = coordinates.lat;
    const lng = coordinates.lng;

    if (!placeId && !keyword)
      return alert('Place ID and Keyword are required!');

    getData({ placeId, keyword, lat, lng, unit, radius, gridSize });
    console.log('Data:', data);
  };

  return (
    <Container twClasses={''} FULL={false} pageTitle={'Home'}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        <Row twClasses={'prose bg-orange-100 grid grid-auto-fit gap-3 p-5'}>
          <Box>
            <div className="min-w-full">
              <label className="label">
                <span className="label-text">Place ID</span>
              </label>
              <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
                <input
                  type="text"
                  placeholder="Insert Place ID"
                  className="input input-bordered w-full rounded-none"
                  required
                />
              </Autocomplete>
            </div>
          </Box>
          <Box>
            <div className="min-w-full">
              <label className="label">
                <span className="label-text">Keyword</span>
              </label>
              <input
                type="text"
                placeholder="Keyword Search"
                className="input input-bordered w-full rounded-none"
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
            </div>
          </Box>
          <Box>
            <div className="pt-9">
              <button
                onClick={handleApiData}
                className="btn btn-warning bg-orange-600 text-white w-full"
              >
                Get Ranking
              </button>
            </div>
          </Box>
        </Row>

        <Row
          twClasses={
            'prose bg-orange-100 flex flex-wrap justify-start px-5 pb-3 -mt-5'
          }
        >
          <Box>
            <div className="w-32 mr-2">
              <label className="label">
                <span className="label-text">Radius Unit</span>
              </label>

              <select
                type="text"
                placeholder="Insert Place ID"
                className="input input-bordered w-full rounded-none h-8"
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="mi">Miles</option>
                <option value="km">Kilometers</option>
              </select>
            </div>
          </Box>
          <Box>
            <div className="w-32 mr-2">
              <label className="label">
                <span className="label-text">Radius</span>
              </label>

              <select
                type="text"
                placeholder="Insert Place ID"
                className="input input-bordered w-full rounded-none h-8"
                onChange={(e) => setRadius(e.target.value)}
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="11">11</option>
                <option value="13">13</option>
                <option value="15">15</option>
              </select>
            </div>
          </Box>
          <Box>
            <div className="w-32 mr-2">
              <label className="label">
                <span className="label-text">Grid Size</span>
              </label>

              <select
                type="text"
                placeholder="Insert Place ID"
                className="input input-bordered w-full rounded-none h-8"
                onChange={(e) => setGridSize(e.target.value)}
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>
          </Box>
          {/* <Box>
            <div className="w-32 mr-2">
              <label className="label">
                <span className="label-text">Zoom</span>
              </label>

              <select
                type="text"
                placeholder="Insert Place ID"
                className="input input-bordered w-full rounded-none h-8"
                onChange={(e) => setZoom(e.target.value)}
              >
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>
          </Box> */}
        </Row>
        {isFetching && (
          <Row twClasses={'flex justify-center'}>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="#ea580c"
              ariaLabel="loading"
            />
          </Row>
        )}
        <Row twClasses={'flex flex-wrap h-4/5 mt-5'}>
          <Box twClasses={'min-w-full h-full border bg-blue-300'}>
            <GoogleMap
              mapContainerStyle={{ height: '100%', width: '100%' }}
              zoom={10}
              // center={{ lat: coordinates.lat, lng: coordinates.lng }}
              center={{ lat: 37.341759, lng: -121.938314 }}
            >
              {/* {data && <RankInfoBox data={data.data.results} />} */}
              {rankingData && <RankInfoBox data={rankingData[0].results} />}
            </GoogleMap>
          </Box>
        </Row>
      </LoadScript>
    </Container>
  );
};

export default HomePage;

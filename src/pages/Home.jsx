import React from 'react';
import { Container, Row, Box } from '../components';
import './Home.scss';
import { useGetLocalRankingQuery } from '../services/rankingApi';

const HomePage = () => {
  const placeId = 'ChIJp6M9fR9PzDERFSVQLbGfznU';
  // const placeId = 'ChIJoejvAr3Mj4ARtHrbKxtAHXI';
  const query = 'movies';
  const lng = '-121.938314';
  const lat = '37.341759';

  const { data, isFetching } = useGetLocalRankingQuery({
    placeId,
    query,
    lat,
    lng,
  });
  console.log(data);

  return (
    <Container twClasses={''} FULL={false} pageTitle={'Home'}>
      <Row twClasses={'prose bg-orange-100 grid grid-auto-fit gap-3 p-5'}>
        <Box>
          <div className='min-w-full'>
            <label className='label'>
              <span className='label-text'>Place ID</span>
            </label>
            <input
              type='text'
              placeholder='Insert Place ID'
              className='input input-bordered w-full rounded-none'
            />
          </div>
        </Box>
        <Box>
          <div className='min-w-full'>
            <label className='label'>
              <span className='label-text'>Keyword</span>
            </label>
            <input
              type='text'
              placeholder='Keyword Search'
              className='input input-bordered w-full rounded-none'
            />
          </div>
        </Box>
        <Box>
          <div className='pt-9'>
            <button className='btn btn-warning bg-orange-600 text-white w-full'>
              Get Ranking
            </button>
          </div>
        </Box>
      </Row>
      <Row twClasses={'prose flex flex-wrap h-4/5 mt-5'}>
        {/* <Box twClasses={'min-w-full'}>
          <h1 className='text-center'>Map Goes here</h1>
        </Box> */}
        <Box twClasses={'min-w-full h-full border bg-blue-300'}>
          <p>Map Box</p>
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;

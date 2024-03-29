import React from 'react';
import { InfoBox } from '@react-google-maps/api';
import RankInfo from './RankInfo';
import rankingData from '../../data/data-5';

const RankInfoBox = ({ data }) => {
  const onLoad = (infoBox) => {
    // console.log('infoBox: ', infoBox);
  };
  const options = { closeBoxURL: '', enableEventPropagation: true };

  return (
    <>
      {data.map((location) => (
        <InfoBox
          key={location.lat + location.lng}
          position={{ lat: location.lat, lng: location.lng }}
          onLoad={onLoad}
          options={options}
        >
          <RankInfo location={location} />
        </InfoBox>
      ))}
    </>
  );
};

export default RankInfoBox;

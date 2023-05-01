import React from 'react';
import { InfoBox } from '@react-google-maps/api';
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
          <div className="w-8 h-8 border-2 border-red-500 rounded-full m-2 relative">
            <span className="text-lg font-bold absolute left-2">
              {location.rank}
            </span>
          </div>
        </InfoBox>
      ))}
    </>
  );
};

export default RankInfoBox;

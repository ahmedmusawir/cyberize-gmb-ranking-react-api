import React from 'react';
import './RankInfo.scss';

const getBackgroundColor = (rank) => {
  if (rank === -1) return 'tomato';
  if (rank === 1) return 'greenyellow';
  if (rank === 2) return 'yellowgreen';
  if (rank === 3) return '#59A96A';
  if (rank === 4) return '#FFF940';
  if (rank === 5) return '#FFE544';
  if (rank >= 6 && rank <= 10) return '#FFC14D';
  if (rank >= 11 && rank <= 15) return '#FFA500';
  if (rank >= 16 && rank <= 20) return '#FFCCCB';
  if (rank >= 21) return 'tomato';
};

const RankInfo = ({ location }) => {
  const backgroundColor = getBackgroundColor(location.rank);

  return (
    <div
      className="w-8 h-8 border-2 border-gray-500 rounded-full m-2 relative"
      style={{ backgroundColor }}
    >
      <span
        className={`text-sm font-bold absolute ${
          location.rank < 10 ? 'left-2.5 mt-1' : 'left-1.5 mt-1'
        } ${location.rank < 0 ? 'the-moose' : ''} ${
          location.rank > 19 ? 'the-moose-2' : ''
        }`}
      >
        {/* {location.rank <= 0 || location.rank > 19 ? `N` : location.rank} */}
        {location.rank <= 0 || location.rank > 19 ? `20+` : location.rank}
      </span>
    </div>
  );
};

export default RankInfo;

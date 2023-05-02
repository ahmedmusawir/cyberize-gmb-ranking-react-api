import React from 'react';

const getBackgroundColor = (rank) => {
  if (rank === -1) return 'tomato';
  if (rank === 1) return 'yellowgreen';
  if (rank === 2) return 'greenyellow';
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
      <span className="text-lg font-bold absolute left-1">
        {location.rank <= 0 ? `N` : location.rank}
      </span>
    </div>
  );
};

export default RankInfo;

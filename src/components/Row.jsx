import React from 'react';

function Row({ children, twClasses }) {
  return (
    // <div className={`min-w-full border-dotted border-2 ${twClasses}`}>
    <div className={`min-w-full ${twClasses}`}>
      {children ? children : 'This is a Row container. Must have children'}
    </div>
  );
}

export default Row;

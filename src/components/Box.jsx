import React from 'react';

function Box({ children, twClasses }) {
  return (
    // <div className={`border-dotted border-2 border-orange-400 ${twClasses}`}>
    <div className={`${twClasses}`}>
      {children ? children : 'This is a Box container. Must have children'}
    </div>
  );
}

export default Box;

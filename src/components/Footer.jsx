import React from 'react';

function Footer({ children, twClasses }) {
  return (
    // <footer className={`min-w-full border-solid border-2 ${twClasses}`}>
    <footer className={`min-w-full ${twClasses}`}>
      {children ? children : 'This is a Footer container. Must have children'}
    </footer>
  );
}

export default Footer;

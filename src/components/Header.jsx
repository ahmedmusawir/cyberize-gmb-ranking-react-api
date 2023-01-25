import React from 'react';

function Header({ children, twClasses }) {
  return (
    <header className={`min-w-full border-solid border-2 ${twClasses}`}>
      {children ? children : 'This is a Header container. Must have children'}
    </header>
  );
}

export default Header;

import React from 'react';

function Layout({ children }) {
  return (
    <section className="flex flex-col min-h-screen">
      {children ? children : 'This is a Layout container. Must have children'}
    </section>
  );
}

export default Layout;

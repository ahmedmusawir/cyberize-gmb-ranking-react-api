import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Container({ children, pageTitle, twClasses, FULL }) {
  // Setting up mandatory Container Title in the browser
  useEffect(() => {
    document.title = `${pageTitle} | Tailwind `;
  }, [pageTitle]);

  return (
    <>
      {FULL && (
        <section
          className={`min-h-full min-w-full ${twClasses}`}
          // className={`border-solid border-2 min-h-full min-w-full ${twClasses}`}
        >
          {children
            ? children
            : 'This is a Container container. Must have children'}
        </section>
      )}
      {!FULL && (
        <section
          className={`min-h-full w-11/12 xl:w-4/5 ${twClasses}`}
          // className={`border-solid border-2 min-h-full w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-4/5 ${twClasses}`}
        >
          {children
            ? children
            : 'This is a Container container. Must have children'}
        </section>
      )}
      {/* LG: 1024+ IS SET TO 91% WIDTH (w-11/12) */}
      {/* XL: 1280+ IS SET TO 80% WIDTH (w-4/5) */}
    </>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  FULL: PropTypes.bool,
  pageTitle: PropTypes.string,
};

export default Container;

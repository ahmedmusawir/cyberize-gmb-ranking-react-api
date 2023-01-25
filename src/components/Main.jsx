import React from 'react';

function Main({ children }) {
  return (
    <main className="min-w-full flex flex-grow justify-center my-10">
      {/* <main className="min-w-full border-dotted border-2 border-green-500 flex flex-grow justify-center"> */}
      {children}
    </main>
  );
}

export default Main;

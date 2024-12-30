import React from 'react';
import backgroundpage from '../assets/backgroundpage.png'; 

const BackgroundPage = () => {
  return (
    <img
      src={backgroundpage}
      alt="Background"
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    />
  );
};

export default BackgroundPage;

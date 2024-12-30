import React from 'react';
import background from '../assets/background.mp4';
import logoWhite from '../assets/LogoWhite.png';

const Main = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={background}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover sm:scale-100 scale-125"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <img
          src={logoWhite}
          alt="JogJazz Festival 2024"
          className="mb-8 w-1/2 sm:w-1/3 md:w-1/4 h-auto sm:translate-y-[-50px] md:translate-y-[-110px]"
        />
        <a
          href="/"
          className="font-Poppins px-10 sm:px-12 md:px-14 py-2 sm:py-3 bg-transparent border border-white text-white font-poppins font-medium text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-200 hover:text-black transition translate-y-0 sm:translate-y-[-10px] md:translate-y-[10px] tracking-wider"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Main;

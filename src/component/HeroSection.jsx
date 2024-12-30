import React from 'react';
import logoWhite from '../assets/LogoWhite.png';
import artist1 from '../assets/artist1.png';

const Hero = () => {
  return (
    <div className="hero-section relative mt-10 text-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 md:-mt-16">
        {/* Kolom Kiri: Logo dan Teks */}
        <div className="logo-and-text flex-1 flex flex-col items-center md:items-start text-center md:text-left md:-mt-36">
          <img
            src={logoWhite}
            alt="JogJazz Festival Logo"
            className="mb-0 w-80 md:w-full" // Memperbesar logo
          />
          <div className="text-section md:-mt-20 md:ml-36">
            <p className="text-2xl md:text-2xl text-white md:ml-12 font-bold">
              <span>21 </span>
              <span className="text-orange-500">•</span>
              <span> 22 </span>
              <span className="text-orange-500">•</span>
              <span> 23 DEC 2024</span>
            </p>
            <p className="text-2xl md:text-2xl text-white font-bold md:-ml-4">
              JEC <span className="text-orange-500">•</span> YOGYAKARTA, INDONESIA
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Gambar Artis */}
        <div className="artist-image flex-1 flex justify-center md:justify-end relative">
          <img
            src={artist1}
            alt="Guitarist performing at JogJazz Festival"
            className="hidden md:block w-72 md:w-full object-cover "
          />
          {/* Overlay untuk efek fading */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent md:-mr-14"></div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
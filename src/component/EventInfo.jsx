import React from 'react';
import Timer from './Timer';
import Maps from '../assets/maps.png';

const EventInfo = () => (
  <div className="w-full bg-black bg-opacity-80 text-white text-center py-20 md:-mt-10 shadow-[0_3px_25px_rgba(255,255,255,0.7)]">
    <h2 className="text-4xl font-bold mb-6 text-shadow-glow">
      COUNTDOWN TO #JOGJAZZ '24
    </h2>
    {/* Timer */}
    <Timer initialHours={7} initialMinutes={59} initialSeconds={55} />
    <div className="mt-10 flex flex-col md:flex-row justify-center items-start gap-20">
      {/* Trailer Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 px-4">
        <h3 className="text-2xl font-semibold text-shadow-glow mb-2">
          #JOGJAZZ '24 PHASE 1 TRAILER
        </h3>
        <p className="text-sm font-medium mb-4">
          WATCH THE OFFICIAL #JOGJAZZ '24 PHASE 1 TRAILER
        </p>
        <iframe
          src="https://www.youtube.com/embed/NWApRjR6Iws"
          title="Official Teaser JogJazz 2024"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-auto md:w-[580px] md:h-[315px] rounded-lg shadow-[0_10px_21px_rgba(255,255,255,0.7)]"
        ></iframe>
      </div>
      {/* Location Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 px-4">
        <h3 className="text-2xl font-semibold text-shadow-glow mb-2">
          #JOGJAZZ '24 LOCATION
        </h3>
        <p className="text-sm font-medium mb-4">
          EVENT LOCATED AT JOGJA EXPO CENTER
        </p>
        <a
          href="https://maps.app.goo.gl/J1fsLNFpkGEXraEv7"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={Maps}
            alt="Event Location"
            className="w-full max-w-md h-auto object-cover rounded-2xl hover:scale-105 transition-transform shadow-[0_10px_21px_rgba(255,255,255,0.7)]"
          />
        </a>
      </div>
    </div>
  </div>
);

export default EventInfo;

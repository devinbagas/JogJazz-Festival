import React from "react";

const ArtistCard = ({ artist, onClick }) => {
  return (
    <div
      className="relative flex justify-center items-center rounded-xl overflow-hidden -ml-5 md:ml-0 w-72 h-96 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 transition-transform hover:scale-110 shadow-[0_3px_21px_rgba(255,255,255,0.7)] cursor-pointer group"
      onClick={() => onClick(artist)}
    >
      {/* Image */}
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale"
      />

      {/* Artist Name (hidden until hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white text-shadow-glow font-Poppins">
          {artist.name}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;

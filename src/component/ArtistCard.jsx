import React from "react";

const ArtistCard = ({ artist, onClick }) => {
  return (
    <div
      className="relative bg-gradient-to-b from-black via-black to-transparent flex justify-center items-center rounded-xl overflow-hidden w-72 h-96 transition-transform hover:scale-110 shadow-[0_3px_21px_rgba(255,255,255,0.7)] cursor-pointer"
      onClick={() => onClick(artist)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <p className="text-lg font-bold text-orange-500">{artist.name}</p>
      </div>
    </div>
  );
};

export default ArtistCard;

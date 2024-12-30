import React from 'react';

const SpotifyEmbed = () => {
  return (
    <div
      className="relative z-1 mt-10 w-full max-w-4xl p-5"
      style={{ boxShadow: '0 4px 35px rgba(255, 255, 255, 0.5)', borderRadius: '12px' }}
    >
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/51IBsCGhtLjMNpkBLlvHZd?utm_source=generator&theme=0"
        width="100%"
        height="500" // Memperbesar tinggi
        frameBorder="0"
        title="Spotify Playlist - JogJazz 2024"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;

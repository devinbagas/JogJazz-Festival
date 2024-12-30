import React from 'react';
import BackgroundPage from '../component/BackgroundPage';
import SpotifyEmbed from '../component/SpotifyEmbed';
import EventInfo from '../component/EventInfo';
import LineUp from '../component/LineupSection';
import Ticket from '../component/TicketSection'
import Sponsor from '../component/Sponsor';
import Hero from '../component/HeroSection';

const Home = () => (
  <div className="relative min-h-screen flex flex-col items-center text-white">
    {/* Background */}
    <BackgroundPage />

    {/* Hero Section */}
    <Hero />

    {/* Event Information Section */}
    <EventInfo />

    {/* LineUp Section */}
    <LineUp />

     {/* Ticket Section */}
     <Ticket />

    {/* Spotify Playlist */}
    <SpotifyEmbed />

    {/* Sponsor Section */}
    <Sponsor />

    <div className = 'w-full h-auto mt-3 mb-5 text-center items-center'>
      <h1 className='text-sm text-white font-medium text-shadow-glow'>
        - SOLIHIN GROUP 2024 -
      </h1>
    </div>
  </div>
);

export default Home;

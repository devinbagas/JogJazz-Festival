import React from 'react';
import SponsorList from '../assets/SponsorList.png';

const Sponsor = () => {
    return (
        <div className='w-full h-auto mt-20 text-white text-center flex flex-col items-center'>
            <h1 className="text-5xl py-5 font-bold text-white text-shadow-glow">LIST OF SPONSOR</h1>
            <img
            src={SponsorList}
            alt="List of Sponsorship" // Deskripsi lebih spesifik
            className="relative w-full md:w-3/4 py-10 mt-5 mb-10 object-cover justify-center flex items-center rounded-xl bg-gray-800 bg-opacity-80 shadow-[0_0px_15px_rgba(255,255,255,0.7)]"
          />
        </div>
    );
};

export default Sponsor;
import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ArtistCard from "./ArtistCard";
import Modal from "./Modal";

// Import gambar
import VictorRay from "../assets/LineUp/VictorRay.jpg";
import MateusAsato from "../assets/LineUp/MateusAsato.jpg";
import DanielCaesar from "../assets/LineUp/DanielCaesar.jpg";
import Honne from "../assets/LineUp/Honne.jpg";
import Polyphia from "../assets/LineUp/Polyphia.jpg";
import MacAyres from "../assets/LineUp/MacAyres.jpg";
import PaulPartohap from "../assets/LineUp/PaulPartohap.jpg";
import ManuelGardnerFernandes from "../assets/LineUp/ManuelGardnerFernandes.jpg";

const LineUp = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const artists = [
    {
      name: 'VICTOR RAY',
      image: VictorRay,
      bio: 'Victor Ray is a singer and songwriter known for his soulful voice and heartfelt lyrics. His music captures raw emotions and has resonated with audiences worldwide through its honest and intimate storytelling.',
    },
    {
      name: 'MATEUS ASATO',
      image: MateusAsato,
      bio: 'Mateus Asato is a Brazilian virtuoso guitarist who has inspired a new generation of players with his innovative style. He blends fingerstyle techniques with captivating pop melodies, creating a unique musical identity.',
    },
    {
      name: 'DANIEL CAESAR',
      image: DanielCaesar,
      bio: 'Daniel Caesar is a Grammy-winning R&B singer from Canada. Known for his smooth vocals and introspective lyrics, he has created deeply moving works, including his popular hit "Best Part."',
    },
    {
      name: 'HONNE',
      image: Honne,
      bio: 'Honne is an electronic music duo from the UK, renowned for their unique blend of soul and electronic sounds. Their romantic and heartfelt tracks have captivated listeners around the globe.',
    },
    {
      name: 'POLYPHIA',
      image: Polyphia,
      bio: 'Polyphia is a progressive instrumental band from the United States, celebrated for their eclectic sound that fuses rock, pop, and hip-hop influences with breathtaking guitar techniques.',
    },
    {
      name: 'MAC AYRES',
      image: MacAyres,
      bio: 'Mac Ayres is an R&B and soul artist who charms audiences with his soothing vocals and laid-back instrumentation. His music exudes warmth and relaxation, perfect for intimate moments.',
    },
    {
      name: 'PAUL PARTOHAP',
      image: PaulPartohap,
      bio: 'Paul Partohap is a talented musician and songwriter from Indonesia. His poetic lyrics and heartfelt melodies create works that deeply connect with listeners on an emotional level.',
    },
    {
      name: 'MANUEL GARDNER',
      image: ManuelGardnerFernandes,
      bio: 'Manuel Gardner Fernandes is a gifted guitarist known for his innovative and expressive playing style. His music combines elements of progressive metal with captivating melodies.',
    },
  ];

  return (
    <div className="mt-7 w-full py-16 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white text-shadow-glow">LINE UP</h1>
        <p className="text-sm font-bold text-gray-300 mt-6 mb-4">
          THE ARTISTS THAT WILL BE PERFORMING ON JOGJAZZ '24
        </p>
        <button className="mt-3 mb-10 px-10 sm:px-12 md:px-14 py-2 sm:py-3 bg-transparent border border-white text-white font-poppins font-medium text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-200 hover:text-black transition translate-y-0 sm:translate-y-[-10px] md:translate-y-[10px] tracking-wider">
          <Link
            to="/lineup">
            VIEW ALL
          </Link>
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-8 rounded-3xl bg-black bg-opacity-90 shadow-[0_0px_21px_rgba(255,255,255,0.7)]"
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index} className="p-10 flex justify-center text-orange-500">
            <ArtistCard artist={artist} onClick={setSelectedArtist} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
        artist={selectedArtist}
      />

      {/* Gaya Kustom untuk Warna Putih pada Arrow dan Pagination */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }

        .swiper-pagination-bullet {
          background-color: white !important;
        }

        .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}</style>
    </div>
  );
};

export default LineUp;

import React, { useState } from "react";
import Modal from "../component/Modal";
import ArtistCard from "../component/ArtistCard";
import Background from "../component/BackgroundPage";

// Import gambar artis
import VictorRay from "../assets/LineUp/VictorRay.jpg";
import MateusAsato from "../assets/LineUp/MateusAsato.jpg";
import DanielCaesar from "../assets/LineUp/DanielCaesar.jpg";
import Honne from "../assets/LineUp/Honne.jpg";
import Polyphia from "../assets/LineUp/Polyphia.jpg";
import MacAyres from "../assets/LineUp/MacAyres.jpg";
import PaulPartohap from "../assets/LineUp/PaulPartohap.jpg";
import ManuelGardnerFernandes from "../assets/LineUp/ManuelGardnerFernandes.jpg";
import Anomalie from '../assets/LineUp/Anomalie.jpg';
import Enny from '../assets/LineUp/ENNY.jpeg';
import Fkj from '../assets/LineUp/FKJ.jpg';
import JeffBernat from '../assets/LineUp/JeffBernat.jpeg';
import Keshi from '../assets/LineUp/Keshi.jpeg';
import MusiqSoulchild from '../assets/LineUp/MusiqSoulchild.jpg';
import Rini from '../assets/LineUp/Rini.jpeg';
import Rubii from '../assets/LineUp/Rubii.jpg';
import SnarkyPuppy from '../assets/LineUp/SnarkyPuppy.jpg';
import TezaSumendra from '../assets/LineUp/TezaSumendra.jpg';
import Vintonic from '../assets/LineUp/Vintonic.jpg';

const LineupPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const artists = [
    {
      name: "ANOMALIE",
      image: Anomalie,
      bio: "Anomalie is a Canadian pianist and producer known for blending jazz, electronic, and classical music. His unique sound captivates listeners worldwide.",
    },
    {
      name: "DANIEL CAESAR",
      image: DanielCaesar,
      bio: "Daniel Caesar is a Grammy-winning R&B singer from Canada. Known for his smooth vocals and introspective lyrics, he has created deeply moving works, including his popular hit 'Best Part.'",
    },
    {
      name: "ENNY",
      image: Enny,
      bio: "ENNY is a British rapper and singer celebrated for her smooth flow and empowering lyrics, best known for her breakout track 'Peng Black Girls.'",
    },
    {
      name: "FKJ",
      image: Fkj,
      bio: "FKJ, also known as French Kiwi Juice, is a multi-instrumentalist and producer famous for his smooth blend of jazz, electronic, and R&B influences.",
    },
    {
      name: "HONNE",
      image: Honne,
      bio: "Honne is an electronic music duo from the UK, renowned for their unique blend of soul and electronic sounds. Their romantic and heartfelt tracks have captivated listeners around the globe.",
    },
    {
      name: "JEFF BERNAT",
      image: JeffBernat,
      bio: "Jeff Bernat is an R&B singer-songwriter known for his soothing voice and relatable lyrics, creating music that resonates deeply with fans worldwide.",
    },
    {
      name: "KESHI",
      image: Keshi,
      bio: "Keshi is an American singer-songwriter and producer known for his emotive vocals and atmospheric soundscapes, blending elements of pop, R&B, and lo-fi beats.",
    },
    {
      name: "MAC AYRES",
      image: MacAyres,
      bio: "Mac Ayres is an R&B and soul artist who charms audiences with his soothing vocals and laid-back instrumentation. His music exudes warmth and relaxation, perfect for intimate moments.",
    },
    {
      name: "MANUEL GARDNER",
      image: ManuelGardnerFernandes,
      bio: "Manuel Gardner Fernandes is a gifted guitarist known for his innovative and expressive playing style. His music combines elements of progressive metal with captivating melodies.",
    },
    {
      name: "MATEUS ASATO",
      image: MateusAsato,
      bio: "Mateus Asato is a Brazilian virtuoso guitarist who has inspired a new generation of players with his innovative style. He blends fingerstyle techniques with captivating pop melodies, creating a unique musical identity.",
    },
    {
      name: "MUSIQ SOULCHILD",
      image: MusiqSoulchild,
      bio: "Musiq Soulchild is a legendary R&B and neo-soul artist known for his rich vocals and timeless hits, such as 'Love' and 'Just Friends (Sunny).' His music has left an indelible mark on the genre.",
    },
    {
      name: "PAUL PARTOHAP",
      image: PaulPartohap,
      bio: "Paul Partohap is a talented musician and songwriter from Indonesia. His poetic lyrics and heartfelt melodies create works that deeply connect with listeners on an emotional level.",
    },
    {
      name: "POLYPHIA",
      image: Polyphia,
      bio: "Polyphia is a progressive instrumental band from the United States, celebrated for their eclectic sound that fuses rock, pop, and hip-hop influences with breathtaking guitar techniques.",
    },
    {
      name: "RINI",
      image: Rini,
      bio: "RINI is an R&B artist from Australia known for his velvety smooth vocals and deeply personal songwriting. His music resonates with listeners worldwide.",
    },
    {
      name: "RUBII",
      image: Rubii,
      bio: "RUBII is an emerging artist known for her unique voice and captivating stage presence. Her music blends contemporary pop with soulful undertones.",
    },
    {
      name: "SNARKY PUPPY",
      image: SnarkyPuppy,
      bio: "Snarky Puppy is a Grammy-winning collective that blends jazz, funk, and world music influences into an unforgettable instrumental experience.",
    },
    {
      name: "TEZA SUMENDRA",
      image: TezaSumendra,
      bio: "Teza Sumendra is an Indonesian R&B artist known for his powerful voice and soulful performances, captivating audiences with his emotive music.",
    },
    {
      name: "VICTOR RAY",
      image: VictorRay,
      bio: "Victor Ray is a singer and songwriter known for his soulful voice and heartfelt lyrics. His music captures raw emotions and has resonated with audiences worldwide through its honest and intimate storytelling.",
    },
    {
      name: "VINTONIC",
      image: Vintonic,
      bio: "Vintonic is a dynamic duo blending pop and jazz influences into their music, creating a refreshing and modern sound that enchants listeners.",
    },
  ];


  return (
    <div className="w-full min-h-screen py-16 px-8 text-white">
      <Background />
      <h1 className="mt-14 text-center text-4xl md:text-5xl font-bold  mb-4 text-shadow-glow">
        LINE UP
      </h1>
      <p className="text-lg font-semibold text-white text-center mt-6 mb-16 font-Poppins">
        List of Artist in Alphabetical Order
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-16 bg-gray-800 bg-opacity-50 p-10 rounded-2xl shadow-[0_0px_22px_rgba(255,255,255,0.7)]">
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artist={artist}
            onClick={setSelectedArtist}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
        artist={selectedArtist}
      />
    </div>
  );
};

export default LineupPage;

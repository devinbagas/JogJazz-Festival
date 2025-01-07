import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, artist }) => {
  if (!artist) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] bg-gray-800 bg-opacity-80 text-white py-8 px-3 rounded-xl shadow-[0_0px_27px_rgba(255,255,255,1)] z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40"
      ariaHideApp={false}
    >
      <div className="relative text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
        >
          ✖
        </button>
        <img
          src={artist.image}
          alt={artist.name}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover shadow-[0_0px_50px_rgba(255,255,255,0.7)]"
        />
        <h2 className="text-3xl font-bold text-shadow-glow">{artist.name}</h2>
        <p className="mt-4 mb-3 text-sm text-gray-400">
          Biography or additional content for {artist.name} goes here.
        </p>
        <p classame='mt-7 p-3 text-sm text-white font-poppins'>
            {artist.bio}
        </p>
      </div>
    </ReactModal>
  );
};

export default Modal;

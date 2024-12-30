import React from 'react';
import { Link } from 'react-router-dom';

const TicketSection = () => {
  const tickets = [
    {
      type: 'Early-Bird Ticket',
      description: 'Presale General-ticket',
      price: '1.275K',
    },
    {
      type: 'General Admission',
      description: 'Get your Normie ticket here!',
      price: '1.900K',
    },
    {
      type: 'VVIP',
      description: 'Watch it from our special seat',
      price: '2.950K',
    },
  ];

  return (
    <section className="ticket-section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-white text-shadow-glow mb-5">TICKETS</h2>
        <p className="text-lg font-semibold text-white mb-10 px-5">
          Get your ticket here! We have Early-Bird, General Admission, and VVIP tickets available!
        </p>
        {/* Tickets List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="ticket-card bg-gray-800 bg-opacity-65 rounded-2xl px-8 py-10 text-white transition transform hover:scale-105 shadow-[0_0px_15px_rgba(255,255,255,1)]"
            >
              <div className="ticket-header text-xl font-bold bg-black rounded-t-xl py-4 text-shadow-glow">
                3-DAY PASS
              </div>
              <h3 className="text-3xl font-bold mt-4">{ticket.type}</h3>
              <p className="text-md text-gray-300 mt-2">{ticket.description}</p>
              <p className="text-xl font-bold mt-7 pt-7 border-t-4 border-white">
                STARTS FROM
                <span className="block text-4xl font-extrabold mt-2 pb-3 text-orange-500 ">
                  IDR {ticket.price}
                </span>
              </p>
              <Link to="/tickets">
                <button className="mt-6 w-full py-2 text-xl font-semibold bg-transparent border-2 text-shadow-glow border-white rounded-lg text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white transition">
                  Buy Tickets
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;

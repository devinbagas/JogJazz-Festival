import React, { useState } from 'react';

const TicketPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState({});

  const tickets = [
    {
      id: 1,
      name: '3 DAY PASS | Early-Bird Ticket',
      price: 1275000,
      status: 'Available',
      maxQuantity: 10,
    },
    {
      id: 2,
      name: '3 DAY PASS | General Admission',
      price: 1900000,
      status: 'Available',
      maxQuantity: 10,
    },
    {
      id: 3,
      name: '3 DAY PASS | VVIP',
      price: 2950000,
      status: 'Available',
      maxQuantity: 10,
    },
  ];

  const handleIncrement = (id) => {
    setSelectedQuantity((prev) => {
      const currentQuantity = prev[id] || 0;
      if (currentQuantity < tickets.find((ticket) => ticket.id === id).maxQuantity) {
        return { ...prev, [id]: currentQuantity + 1 };
      }
      return prev;
    });
  };

  const handleDecrement = (id) => {
    setSelectedQuantity((prev) => {
      const currentQuantity = prev[id] || 0;
      if (currentQuantity > 0) {
        return { ...prev, [id]: currentQuantity - 1 };
      }
      return prev;
    });
  };

  return (
    <div className="p-10 bg-dark-gradient">
      <h2 className="mt-10 text-3xl font-bold mb-8">JogJazz Festival 2024</h2>

      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-xl font-semibold mb-4">Select Category</h3>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4"
          >
            {/* Informasi tiket */}
            <div>
              <h4 className="text-lg font-bold">{ticket.name}</h4>
              <p className="py-3 text-sm text-gray-500">
                Ticket Price Includes Tax & Service Fee <br />
                (Enter before 6 PM) <br />
              </p>
            </div>

            {/* Harga dan tombol jumlah tiket */}
            <div className="text-right">
              <p className="text-lg font-semibold">Rp. {ticket.price.toLocaleString()}</p>
              {ticket.status === 'Sold Out' ? (
                <p className="text-red-500 font-bold mt-2">SOLD OUT</p>
              ) : (
                <div className="flex items-center justify-end space-x-2 mt-2">
                  <button
                    onClick={() => handleDecrement(ticket.id)}
                    className="text-white px-3 py-1 rounded-lg font-bold"
                    disabled={!selectedQuantity[ticket.id]}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">
                    {selectedQuantity[ticket.id] || 0}
                  </span>
                  <button
                    onClick={() => handleIncrement(ticket.id)}
                    className=" text-white px-3 py-1 rounded-lg font-bold"
                    disabled={
                      selectedQuantity[ticket.id] >= ticket.maxQuantity
                    }
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Total harga jika ada tiket yang dipilih */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Total</h3>
        <p className="text-2xl font-bold">
          Rp.{' '}
          {Object.entries(selectedQuantity).reduce(
            (total, [id, quantity]) =>
              total +
              tickets.find((ticket) => ticket.id === parseInt(id)).price *
                quantity,
            0
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TicketPage;

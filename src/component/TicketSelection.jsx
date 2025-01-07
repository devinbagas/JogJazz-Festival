import React from 'react';

const TicketSelection = ({
  tickets,
  selectedQuantity,
  handleIncrement,
  handleDecrement,
}) => (
  <div className="border-t border-gray-300 pt-4">
    <h3 className="text-xl font-semibold mb-4">Pilih Tiket</h3>
    {tickets.map((ticket) => (
      <div
        key={ticket.id}
        className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4"
      >
        <div>
          <h4 className="text-lg font-bold">{ticket.name}</h4>
          <p className="py-3 text-sm text-gray-500">
            Ticket Price Includes Tax & Service Fee <br />
            (Enter before 6 PM) <br />
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">Rp. {ticket.price.toLocaleString()}</p>
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
              className="text-white px-3 py-1 rounded-lg font-bold"
              disabled={selectedQuantity[ticket.id] >= ticket.maxQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TicketSelection;
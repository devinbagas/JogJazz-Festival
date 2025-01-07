import React from 'react';

const TotalAmountSection = ({ tickets, selectedQuantity }) => (
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
);

export default TotalAmountSection;
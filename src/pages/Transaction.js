import React, { useEffect, useState } from "react";
import Background from "../component/BackgroundPage";
import axios from "axios";

const idToken = localStorage.getItem("idToken");

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data dari API
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://devin-bagas-680164014289.asia-southeast2.run.app/tickets",
          {
            headers: {
              Authorization: `Bearer ${idToken}`, // Menambahkan header Authorization
            },
          }
        );
        setTransactions(Array.isArray(response.data) ? response.data : []); // data yang diterima dari API
      } catch (err) {
        setError("Failed to fetch transactions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-history-container p-6 max-w-4xl mx-auto">
      <Background />
      <h1 className="mt-16 text-4xl font-bold text-center mb-10 text-white text-shadow-glow">
        TRANSACTION HISTORY
      </h1>
      <div className="space-y-0 bg-gray-800 bg-opacity-60 p-10 rounded-xl shadow-[0_0px_35px_rgba(255,255,255,0.7)]">
        {loading ? (
          <p className="text-center text-lg text-white font-Poppins">Loading...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-500 font-Poppins">{error}</p>
        ) : transactions.length === 0 ? (
          <p className="text-center text-lg text-white font-Poppins">
            No transactions yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="p-4 bg-black hover:bg-gray-950 rounded-md transition"
              >
                <div className="text-white font-Poppins text-lg">
                  <p>
                    <span className="font-semibold">Transaction Id:</span> {transaction.idEvent}
                  </p>
                  <p>
                    <span className="font-semibold">Ticket Name:</span> {transaction.name}
                  </p>
                  <p>
                    <span className="font-semibold">Quantity:</span> {transaction.quantity}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span> {transaction.price}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> {transaction.status}
                  </p>
                  <p className="mt-4 font-semibold">
                    Total: {transaction.price * transaction.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;

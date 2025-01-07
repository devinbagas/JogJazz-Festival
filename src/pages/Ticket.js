import React, { useState, useEffect } from 'react';
import UserDataSection from '../component/UserData';
import TicketSelection from '../component/TicketSelection';
import TicketTotal from '../component/TicketTotal';

const Ticket = () => {
  const [userData, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', phone: '', email: '' });
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState({});

  const tickets = [
    {
      id: 1,
      name: '3 DAY PASS | Early-Bird Ticket',
      price: 1275000,
      maxQuantity: 10,
    },
    {
      id: 2,
      name: '3 DAY PASS | General Admission',
      price: 1900000,
      maxQuantity: 10,
    },
    {
      id: 3,
      name: '3 DAY PASS | VVIP',
      price: 2950000,
      maxQuantity: 10,
    },
  ];

  // Increment function for ticket quantity
  const handleIncrement = (id) => {
    setSelectedQuantity((prev) => {
      const currentQuantity = prev[id] || 0;
      if (currentQuantity < tickets.find((ticket) => ticket.id === id).maxQuantity) {
        return { ...prev, [id]: currentQuantity + 1 };
      }
      return prev;
    });
  };

  // Decrement function for ticket quantity
  const handleDecrement = (id) => {
    setSelectedQuantity((prev) => {
      const currentQuantity = prev[id] || 0;
      if (currentQuantity > 0) {
        return { ...prev, [id]: currentQuantity - 1 };
      }
      return prev;
    });
  };

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const idToken = localStorage.getItem("idToken");
        if (!idToken) {
          throw new Error('No token found');
        }
        const response = await fetch('https://devin-bagas-680164014289.asia-southeast2.run.app/user', {
          headers: {
            'Authorization': `Bearer ${idToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData([data]); // Store as an array even for a single user
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  

  // Save user data to the API whenever it changes
  const saveUserData = async (updatedUserData) => {
    try {
      const response = await fetch('https://devin-bagas-680164014289.asia-southeast2.run.app/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.ok) {
        console.log('User data saved successfully');
      } else {
        console.error('Failed to save user data');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div className="p-10 bg-dark-gradient">
      <h2 className="mt-10 text-3xl font-bold mb-8">JogJazz Festival 2024</h2>

      {/* User Data Section */}
      <UserDataSection
        userData={userData}
        setUserData={setUserData}
        isModalOpen={isModalOpen}
        newUser={newUser}
        setIsModalOpen={setIsModalOpen}
        setNewUser={setNewUser}
        editingUserIndex={editingUserIndex}
        setEditingUserIndex={setEditingUserIndex}
        saveUserData={saveUserData} // Passing saveUserData function to child component
      />

      {/* Ticket Selection Section */}
      <TicketSelection
        tickets={tickets}
        selectedQuantity={selectedQuantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      {/* Ticket Total Section */}
      <TicketTotal
        tickets={tickets}
        selectedQuantity={selectedQuantity}
      />
    </div>
  );
};

export default Ticket;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataSection = ({
  userData,
  setUserData,
  isModalOpen,
  newUser,
  setIsModalOpen,
  setNewUser,
  editingUserIndex,
  setEditingUserIndex,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const safeUserData = Array.isArray(userData) ? userData : [];

  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = () =>
    newUser.name && validatePhone(newUser.phone) && validateEmail(newUser.email);

  const saveUserDataToAPI = async (user, isEdit = false) => {
    try {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) {
        throw new Error('Tidak ada token yang ditemukan.');
      }

      const url = `https://devin-bagas-680164014289.asia-southeast2.run.app/user`;
      const method = isEdit ? 'PUT' : 'POST';

      const dataToSend = {
        email: user.email,
        name: user.name,
        no_telp: user.phone,
      };

      // Sertakan userID jika sedang mengedit
      if (isEdit && user.userID) {
        dataToSend.userID = user.userID;
      }

      const response = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        data: dataToSend,
      });

      const savedUser = { ...response.data, id: response.data.id || Date.now() };

      if (isEdit) {
        const updatedData = [...userData];
        updatedData[editingUserIndex] = savedUser;
        setUserData(updatedData);
      } else {
        setUserData([...userData, savedUser]);
      }

      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteUserDataFromAPI = async (id, index) => {
    try {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) {
        throw new Error('Tidak ada token yang ditemukan.');
      }

      const response = await fetch(
        `https://devin-bagas-680164014289.asia-southeast2.run.app/user/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Gagal menghapus data dari database.');
      }

      const updatedData = [...userData];
      updatedData.splice(index, 1);
      setUserData(updatedData);
    } catch (error) {
      console.error(error.message);
      alert('Terjadi kesalahan saat menghapus data.');
    }
  };

  const handleEditUser = (user, index) => {
    setNewUser({ 
      name: user.name, 
      phone: user.no_telp, 
      email: user.email, 
      userID: user.userID, // Pastikan userID disertakan
    });
    setEditingUserIndex(index);
    setIsModalOpen(true);
  };

  const handleAddUser = () => {
    setNewUser({ name: '', phone: '', email: '' });
    setEditingUserIndex(null);
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log('User data updated:', userData);
  }, [userData]);

  return (
    <div className="pb-4 mb-4">
      <h3 className="text-xl font-semibold mb-4">Data Diri</h3>
      {safeUserData.length === 0 ? (
        <div>
          <p className="text-gray-500 mb-4">Belum ada data diri.</p>
          <button
            onClick={handleAddUser}
            className="border border-white text-white px-4 py-2 rounded-3xl font-Poppins hover:bg-orange-500 transition font-semibold"
          >
            Tambahkan Data Diri
          </button>
        </div>
      ) : (
        <div>
          {safeUserData.map((user, index) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-4 border font-Poppins border-gray-300 rounded-lg mb-4"
            >
              <div>
                <p className="font-semibold">Nama: {user.name}</p>
                <p>No Telp: {user.no_telp}</p>
                <p>Email: {user.email}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditUser(user, index)}
                  className="text-blue-500 font-Poppins hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUserDataFromAPI(user.id, index)}
                  className="text-red-500 font-Poppins hover:underline"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {editingUserIndex !== null ? 'Edit Data Diri' : 'Tambah Data Diri'}
            </h3>
            <input
              type="text"
              placeholder="Nama"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full border bg-gray-900 border-gray-300 rounded-lg p-2 mb-4"
            />
            <input
              type="text"
              placeholder="No Telp"
              value={newUser.phone}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
              className="w-full border bg-gray-900 border-gray-300 rounded-lg p-2 mb-4"
            />
            {!validatePhone(newUser.phone) && newUser.phone && (
              <p className="font-Poppins text-red-500 text-sm -mt-2 mb-4">
                Format No Telp tidak valid.
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="w-full border bg-gray-900 border-gray-300 rounded-lg p-2 mb-4"
            />
            {!validateEmail(newUser.email) && newUser.email && (
              <p className="font-Poppins text-red-500 text-sm -mt-2 mb-4">
                Format Email tidak valid.
              </p>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={async () => {
                  if (isFormValid()) {
                    setIsSaving(true);
                    const userToSave = {
                      name: newUser.name,
                      phone: newUser.phone,
                      email: newUser.email,
                      userID: newUser.userID, // Sertakan userID
                    };
                    await saveUserDataToAPI(userToSave, editingUserIndex !== null);
                  }
                }}
                className={`${isFormValid()
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-500 cursor-not-allowed'
                  } text-white px-4 py-2 rounded-lg`}
                disabled={!isFormValid() || isSaving}
              >
                {isSaving ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataSection;

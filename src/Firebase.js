// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUCveq_TQ-VlwYGVT_3V6p1f8LlZd7sQ4",
  authDomain: "devin-ticket.firebaseapp.com",
  projectId: "devin-ticket",
  storageBucket: "devin-ticket.appspot.com",
  messagingSenderId: "970228612717",
  appId: "1:970228612717:web:feb8ca79e11794a4978964",
};

// Pastikan Firebase hanya diinisialisasi satu kali
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp); // Ekspor Auth untuk digunakan
export default firebaseApp;

import React, { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ModalAuth = ({ isOpen, onClose, onLoginSuccess }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://devin-bagas-680164014289.asia-southeast2.run.app/";

    try {
      let endpoint = isLogin ? "login" : "register";
      let payload = { email, password };

      // Validation for Sign Up
      if (!isLogin && password !== confirmPassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }

      const response = await fetch(`${url}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        data = await response.text();
      }

      if (response.ok) {
        console.log(`${isLogin ? "Login" : "Sign Up"} success:`, data);

        if (isLogin && data.idToken) {
          localStorage.setItem("idToken", data.idToken);
          console.log("ID Token saved:", data.idToken);
          onLoginSuccess(); // Panggil onLoginSuccess untuk mengupdate status login
        }

        onClose(); // Close modal
        if (isLogin) {
          navigate("/"); // Redirect to home page
        }
      } else {
        setErrorMessage(data.message || data || "An error occurred.");
        console.error(`${isLogin ? "Login" : "Sign Up"} failed:`, data);
      }
    } catch (error) {
      console.error(`Error during ${isLogin ? "login" : "sign up"}:`, error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] bg-gray-800 bg-opacity-70 text-white py-8 px-5 rounded-xl shadow-[0_0px_27px_rgba(255,255,255,1)] z-50"
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
        <h2 className="text-3xl font-bold text-shadow-glow mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <div>
            <label htmlFor="email" className="block font-Poppins text-sm text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-Poppins text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-Poppins text-gray-400"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="font-Poppins px-10 sm:px-12 md:px-14 py-2 sm:py-3 bg-transparent border border-white text-white font-poppins font-medium text-sm sm:text-base md:text-lg rounded-full hover:bg-gray-200 hover:text-black transition translate-y-0 sm:translate-y-[-10px] md:translate-y-[10px] tracking-wider"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-10 text-sm text-white font-Poppins">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  setErrorMessage(""); // Reset error message
                  setIsLogin(false);
                }}
                className="text-orange-500 font-Poppins hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setErrorMessage(""); // Reset error message
                  setIsLogin(true);
                }}
                className="text-orange-500 font-Poppins hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </ReactModal>
  );
};

export default ModalAuth;

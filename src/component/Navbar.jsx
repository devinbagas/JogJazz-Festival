import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoTxtWhite from '../assets/LogoTxtWhite.png';
import ModalAuth from './ModalAuth';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu dropdown
    const [opacity, setOpacity] = useState(15); // State untuk mengatur opacity navbar
    const [isModalOpen, setIsModalOpen] = useState(false); // State untuk pop-up modal
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

    // Memeriksa status login dari localStorage saat komponen pertama kali dimuat
    useEffect(() => {
        const token = localStorage.getItem('idToken');
        setIsLoggedIn(!!token); // Jika ada idToken, user dianggap login
    }, []);

    // Fungsi untuk logout
    const handleLogout = () => {
        localStorage.removeItem('idToken'); // Menghapus idToken dari localStorage
        setIsLoggedIn(false); // Update state login menjadi false
    };

    // Efek untuk menangani perubahan scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setOpacity(80); // Ubah opacity menjadi 80% saat scroll ke bawah
            } else {
                setOpacity(15); // Kembalikan opacity menjadi 15% saat di atas
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-10 flex items-center justify-between p-4`}
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`,
                    transition: 'background-color 0.3s ease-in-out',
                }}
            >
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logoTxtWhite}
                        alt="JogJazz Logo"
                        className="w-20 h-auto ml-4"
                    />
                </Link>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 mr-6">
                    {/* Links */}
                    {['Home', 'Lineup', 'FAQ', 'Transaction', 'Ticket'].map((item, idx) => (
                        <li key={idx}>
                            <Link
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`relative group text-xl font-semibold transition-colors duration-300 ease-out ${
                                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                                        ? 'text-white'
                                        : 'text-white hover:text-orange-500'
                                }`}
                            >
                                {item}
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out ${
                                        location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        </li>
                    ))}
                    <li>
                        {/* Jika user sudah login, tampilkan tombol Logout */}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="text-xl px-5 font-semibold font-poppins text-white duration-300 border-white border rounded-md hover:bg-white hover:text-orange-500 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-xl px-5 font-semibold font-poppins text-white duration-300 border-white border rounded-md hover:bg-white hover:text-orange-500 transition"
                            >
                                Login
                            </button>
                        )}
                    </li>
                </ul>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col space-y-4 p-4 md:hidden">
                        {['Home', 'Lineup', 'FAQ', 'Transaction', 'Ticket'].map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-xl hover:text-orange-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <li>
                            {/* Jika user sudah login, tampilkan tombol Logout */}
                            {isLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="text-xl font-poppins hover:text-orange-500"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsModalOpen(true);
                                    }}
                                    className="text-xl font-poppins border-white border rounded-full hover:bg-gray-200 hover:text-orange-500 transition px-7"
                                >
                                    Login
                                </button>
                            )}
                        </li>
                    </ul>
                )}
            </nav>

            {/* ModalAuth */}
            {isModalOpen && (
                <ModalAuth
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onLoginSuccess={() => setIsLoggedIn(true)} // Trigger perubahan status login
                />
            )}
        </>
    );
};

export default Navbar;

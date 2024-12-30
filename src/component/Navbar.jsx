import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoTxtWhite from '../assets/LogoTxtWhite.png';

const Navbar = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu dropdown
    const [opacity, setOpacity] = useState(15); // State untuk mengatur opacity navbar

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
        <nav
            className={`fixed top-0 left-0 w-full z-10 flex items-center justify-between p-4`}
            style={{
                backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`, // Atur opacity menggunakan state
                transition: 'background-color 0.3s ease-in-out', // Transisi yang halus saat berubah
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
            <ul className="hidden md:flex space-x-12 mr-6 ">
                <li>
                    <Link
                        to="/"
                        className={`relative group text-xl font-semibold font-poppins transition-colors duration-300 ease-out ${location.pathname === '/' ? 'text-white' : 'text-white hover:text-orange-500'
                            }`}
                    >
                        Home
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/lineup"
                        className={`relative group text-xl font-semibold font-poppins transition-colors duration-300 ease-out ${location.pathname === '/lineup' ? 'text-white' : 'text-white hover:text-orange-500'
                            }`}
                    >
                        Lineup
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out ${location.pathname === '/lineup' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/faq"
                        className={`relative group text-xl font-semibold font-poppins transition-colors duration-300 ease-out ${location.pathname === '/faq' ? 'text-white' : 'text-white hover:text-orange-500'
                            }`}
                    >
                        FAQ
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out ${location.pathname === '/faq' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/tickets"
                        className={`relative group text-xl font-semibold font-poppins transition-colors duration-300 ease-out ${location.pathname === '/tickets' ? 'text-white' : 'text-white hover:text-orange-500'
                            }`}
                    >
                        Tickets
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-500 ease-out ${location.pathname === '/tickets' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                        />
                    </Link>
                </li>
            </ul>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <ul
                    className={`absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col space-y-4 p-4 md:hidden`}
                >
                    <li>
                        <Link
                            to="/"
                            className="text-xl font-poppins hover:text-orange-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/lineup"
                            className="text-xl font-poppins hover:text-orange-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Lineup
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className="text-xl font-poppins hover:text-orange-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tickets"
                            className="text-xl font-poppins hover:text-orange-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tickets
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

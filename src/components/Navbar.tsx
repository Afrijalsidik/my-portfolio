import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className="fixed w-full glass z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="text-2xl text-white hover:text-purple-400 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, '#about')}
                            className="text-2xl text-white hover:text-purple-400 transition"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, '#projects')}
                            className="text-2xl text-white hover:text-purple-400 transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#resume"
                            onClick={(e) => handleNavClick(e, '#resume')}
                            className="text-2xl text-white hover:text-purple-400 transition"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="text-2xl text-white hover:text-purple-400 transition"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className={`md:hidden flex flex-col space-y-1.5 p-2 ${isOpen ? 'hamburger-active' : ''}`}
                    >
                        <span className="hamburger-line line1 block w-8 h-0.5 bg-white"></span>
                        <span className="hamburger-line line2 block w-8 h-0.5 bg-white"></span>
                        <span className="hamburger-line line3 block w-8 h-0.5 bg-white"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden glass border-t border-white/20`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="block px-3 py-2 text-2xl text-white hover:bg-purple-500/20 rounded"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => handleNavClick(e, '#about')}
                        className="block px-3 py-2 text-2xl text-white hover:bg-purple-500/20 rounded"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => handleNavClick(e, '#projects')}
                        className="block px-3 py-2 text-2xl text-white hover:bg-purple-500/20 rounded"
                    >
                        Projects
                    </a>
                    <a
                        href="#resume"
                        onClick={(e) => handleNavClick(e, '#resume')}
                        className="block px-3 py-2 text-2xl text-white hover:bg-purple-500/20 rounded"
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="block px-3 py-2 text-2xl text-white hover:bg-purple-500/20 rounded"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
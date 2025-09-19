
import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a 
        href={href}
        className="px-5 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300"
    >
        {children}
    </a>
);

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
            <nav className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-lg">
                <div className="flex items-center">
                    <NavLink href="#home">home</NavLink>
                    <NavLink href="#about">about</NavLink>
                    <NavLink href="#skills">skills</NavLink>
                    <NavLink href="#projects">projects</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;

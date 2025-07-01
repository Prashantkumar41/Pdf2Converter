
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
          PDF2 CONVERTER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base font-medium">
          <Link to="/" className="text-gray-800 hover:text-indigo-600 transition">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-indigo-600 transition">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-indigo-600 transition">Contact</Link>
          <Link to="/tools" className="text-gray-800 hover:text-indigo-600 transition">ALL PDF TOOLS</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Get started
          </button>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-base font-medium">
          <Link to="/" className="block text-gray-800 hover:text-indigo-600 transition">Home</Link>
          <Link to="/about" className="block text-gray-800 hover:text-indigo-600 transition">About</Link>
          <Link to="/contact" className="block text-gray-800 hover:text-indigo-600 transition">Contact</Link>
          <Link to="/tools" className="block text-gray-800 hover:text-indigo-600 transition">ALL PDF TOOLS</Link>
        </div>
      )}
    </header>
  );
}

// -------------------------------------------4th
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import ToolDropdown from "../common/ToolDropdown"; // ✅ adjust path if needed

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//         {/* ✅ Logo */}
//         <Link
//           to="/"
//           className="text-3xl font-extrabold text-gray-900 tracking-tight"
//         >
//           PDF2 CONVERTER
//         </Link>

//         {/* ✅ Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8 text-base font-medium relative">
//           <Link
//             to="/"
//             className="text-gray-800 hover:text-indigo-600 transition"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-800 hover:text-indigo-600 transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-800 hover:text-indigo-600 transition"
//           >
//             Contact
//           </Link>

//           {/* ✅ ALL PDF TOOLS (Hoverable Mega Menu) */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <span className="text-black font-medium cursor-pointer flex items-center hover:text-indigo-600 transition">
//               ALL PDF TOOLS
//               <span className="ml-1 text-xs mt-[1px]">▼</span>
//             </span>

//             {/* ✅ Full-width Dropdown */}
//             {dropdownOpen && (
//               <div className="absolute left-0 top-full w-screen bg-white border-t shadow-lg z-50">
//                 {/* <div className="max-w-7xl mx-auto px-6"> */}
//                     <div className="mx-4 sm:mx-8 lg:mx-12 xl:mx-20">

//                   <ToolDropdown />
//                 </div>
//               </div>
//             )}

//           </div>
//         </nav>

//         {/* ✅ Right Section */}
//         <div className="flex items-center space-x-4">
//           <button className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
//             Get started
//           </button>

//           {/* ✅ Mobile Menu Icon */}
//           <button
//             className="md:hidden text-black focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* ✅ Mobile Nav Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-base font-medium">
//           <Link
//             to="/"
//             className="block text-gray-800 hover:text-indigo-600 transition"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block text-gray-800 hover:text-indigo-600 transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="block text-gray-800 hover:text-indigo-600 transition"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/tools"
//             className="block text-gray-800 hover:text-indigo-600 transition"
//           >
//             ALL PDF TOOLS
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// --------------------------------------------------2nd one 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ToolDropdown from "../common/ToolDropdown";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* LEFT: Logo fully to the left */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            PDF2CONVERTER
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-10 text-base font-medium">
          <Link to="/merge" className="hover:text-red-500 transition">
            MERGE PDF
          </Link>
          <Link to="/split" className="hover:text-red-500 transition">
            SPLIT PDF
          </Link>
          <Link to="/compress" className="hover:text-red-500 transition">
            COMPRESS PDF
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-2 px-2 hover:text-red-500 transition">
              CONVERT PDF
              <ChevronDownIcon className="w-4 h-4 mt-0.5" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-4 w-64 z-10">
              <p className="text-sm text-gray-700">Convert options here</p>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 px-2 hover:text-red-500 transition">
              ALL PDF TOOLS
              <ChevronDownIcon className="w-4 h-4 mt-0.5" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-screen max-w-6xl bg-white border shadow-lg p-6 z-20">
                <ToolDropdown />
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT: Get Started button fully to the right */}
        <div className="flex-shrink-0 hidden md:flex">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md text-sm hover:bg-red-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <Link to="/merge" className="block hover:text-red-500">
            MERGE PDF
          </Link>
          <Link to="/split" className="block hover:text-red-500">
            SPLIT PDF
          </Link>
          <Link to="/compress" className="block hover:text-red-500">
            COMPRESS PDF
          </Link>
          <Link to="/convert" className="block hover:text-red-500">
            CONVERT PDF
          </Link>
          <Link to="/tools" className="block hover:text-red-500">
            ALL PDF TOOLS
          </Link>
          <button className="mt-2 bg-red-500 text-white w-full py-2 rounded-md text-sm hover:bg-red-600">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

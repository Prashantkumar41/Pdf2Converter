import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300 text-sm w-full">
      {/* Top Footer Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-14 items-start">
        {/* Column 1: VEx */}
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-3">VEx</h2>
          <p className="text-sm leading-relaxed">
            Easily convert your files to PDF with our all-in-one converter.
            Whether it's text, images, or spreadsheets — get fast, high-quality
            PDF conversions in just a few clicks. Simplify your workflow with
            reliable and seamless results.
          </p>
        </div>

        {/* Column 2: Popular Courses */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
          <ul className="text-sm space-y-1 leading-relaxed">
            <li>UPSC - Union Public Service Commission</li>
            <li>General Knowledge</li>
            <li>MBA</li>
          </ul>
        </div>

        {/* Column 3: Popular Topics */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-3">Popular Topics</h3>
          <ul className="text-sm space-y-1 leading-relaxed">
            <li>Human Resource Management</li>
            <li>Operations Management</li>
            <li>Marketing Management</li>
          </ul>
        </div>

        {/* Column 4: Company Info */}
        <div className="flex flex-col h-full">
          <h3 className="uppercase text-lg font-semibold mb-3">
            Company is also available on
          </h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-red-600 hover:scale-110 transition">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-1">Contacts</h4>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:admin@company.com"
                className="text-blue-700 hover:underline"
              >
                admin@company.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-300 px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© Copyright 2025 Valtara Explainer. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand/About */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">VEx</h2>
          <p className="text-gray-600">
            Effortlessly convert any document to PDF with our versatile PDF-to-All Converter. This tool supports various formats, ensuring seamless transitions. Simplify your document management today!
          </p>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Popular Courses</h3>
          <ul className="space-y-1 text-gray-700">
            <li>UPSC – Union Public Service Commission</li>
            <li>General Knowledge</li>
            <li>MBA</li>
          </ul>
        </div>

        {/* Popular Topics */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Popular Topics</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Human Resource Management</li>
            <li>Operations Management</li>
            <li>Marketing Management</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:scale-110 transition transform text-red-600">
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="hover:scale-110 transition transform text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <div>
            <strong className="block mb-1 text-gray-900">Contact</strong>
            <p className="text-gray-700">Email: admin@company.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © 2024 Valtara Explainer. All rights reserved.
      </div>
    </footer>
  );
}

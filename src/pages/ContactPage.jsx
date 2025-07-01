import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side Info */}
      <div className="bg-[#0d0d24] text-white p-10 lg:w-1/3 w-full flex flex-col justify-center">
        <h3 className="uppercase text-sm text-gray-400 mb-2">Contact</h3>
        <h1 className="text-3xl font-bold mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <ul className="space-y-4 text-sm">
          <li>📍 House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</li>
          <li>📞 +93 749 99 65 50</li>
          <li>🕒 24/7</li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="bg-white p-10 flex-1 flex items-center justify-center">
        <form className="w-full max-w-2xl space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                required
                type="text"
                placeholder="Jane"
                className="w-full border border-red-500 rounded px-4 py-2 bg-gray-100"
              />
              <p className="text-xs text-red-600 mt-1">Please fill out this field.</p>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded px-4 py-2 bg-gray-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="********@******.**"
              className="w-full rounded px-4 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full rounded px-4 py-2 bg-gray-100"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" className="text-sm">Send me your newsletter!</label>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

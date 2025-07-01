import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">About PDF2 Converter</h1>
      <p className="text-gray-700 text-lg leading-7">
        PDF2 Converter is a free, fast, and easy-to-use tool that allows users to convert PDF documents into various formats like CSV, Excel, HTML, JPG, and JSON.
        <br /><br />
        Our mission is to simplify document handling with reliable tools. Whether you're a student, professional, or business, PDF2 Converter helps you streamline your workflow.
        <br /><br />
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Multiple file format support</li>
          <li>No signup required</li>
          <li>Accurate data extraction</li>
          <li>Secure and fast</li>
        </ul>
      </p>
    </div>
  );
}

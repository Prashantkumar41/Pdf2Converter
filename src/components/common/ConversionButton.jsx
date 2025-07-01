import React from "react";

export default function ConversionButton({ file, option }) {
  const handleConvert = () => {
    if (!file) {
      alert("Please upload a file first");
      return;
    }
    alert(`Pretending to convert: ${file.name} with option: ${option}`);
  };

  return (
    <button onClick={handleConvert} className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
      Convert Now
    </button>
  );
}

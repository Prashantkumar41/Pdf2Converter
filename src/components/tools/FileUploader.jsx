import React, { useRef } from "react";

export default function FileUploader({ onFileSelected }) {
  const inputRef = useRef();

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 rounded cursor-pointer" onClick={() => inputRef.current.click()}>
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => onFileSelected(e.target.files[0])}
      />
      <p className="text-gray-600">Click or drag file here to upload</p>
    </div>
  );
}

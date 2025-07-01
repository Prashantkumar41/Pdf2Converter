



// // src/components/common/ToolCard.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const formatToIcon = {
//   PDF: "/assets/icons/pdf-icon.png",
//   EXCEL: "/assets/icons/excel-icon.png",
//   HTML: "/assets/icons/html-icon.png",
//   JPG: "/assets/icons/jpg-icon.png",
//   JSON: "/assets/icons/json-icon.png",
//   PNG: "/assets/icons/png-icon.png",
//   WORD: "/assets/icons/word-icon.png",
//   XML: "/assets/icons/xml-icon.png",
//   ZIP: "/assets/icons/zip-icon.png",
//   WEBP: "/assets/icons/webp-icon.png",
//   TEXT: "/assets/icons/text-icon.png",
//   CSV: "/assets/icons/csv-icon.png",
//   SPEECH: "/assets/icons/voice-icon.png",
// };

// const ToolCard = ({ title, description, icon, route }) => {
//   const navigate = useNavigate();

//   const [fromFormat, , toFormat] = title.split(" ");
//   const fromIcon = formatToIcon[fromFormat] || "/assets/icons/pdf-icon.png";
//   const toIcon = formatToIcon[toFormat] || icon;

//   return (
//     <div
//       onClick={() => navigate(route)}
//       className="bg-white cursor-pointer rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 w-full min-h-[230px]"
//     >
//       <div className="flex items-center gap-3 mb-4">
//         <img src={fromIcon} alt={fromFormat} className="w-10 h-10" />
//         <span className="text-xl">➤</span>
//         <img src={toIcon} alt={toFormat} className="w-10 h-10" />
//       </div>
//       <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
//       <p className="text-xs text-gray-700 leading-snug">{description}</p>
//     </div>
//   );
// };

// export default ToolCard;



// src/components/common/ToolCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const formatToIcon = {
  PDF: "/assets/icons/pdf-icon.png",
  EXCEL: "/assets/icons/excel-icon.png",
  HTML: "/assets/icons/html-icon.png",
  JPG: "/assets/icons/jpg-icon.png",
  JSON: "/assets/icons/json-icon.png",
  PNG: "/assets/icons/png-icon.png",
  WORD: "/assets/icons/word-icon.png",
  XML: "/assets/icons/xml-icon.png",
  ZIP: "/assets/icons/zip-icon.png",
  WEBP: "/assets/icons/webp-icon.png",
  TEXT: "/assets/icons/text-icon.png",
  CSV: "/assets/icons/csv-icon.png",
  SPEECH: "/assets/icons/voice-icon.png",
};

const ToolCard = ({ title, description, icon, route }) => {
  const navigate = useNavigate();

  const [fromFormat, , toFormat] = title.split(" ");
  const fromIcon = formatToIcon[fromFormat] || "/assets/icons/pdf-icon.png";
  const toIcon = formatToIcon[toFormat] || icon;

  return (
    <div
      onClick={() => navigate(route)}
      className="bg-white cursor-pointer rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 w-full min-h-[230px] h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={fromIcon} alt={fromFormat} className="w-10 h-10" />
          <span className="text-xl">➤</span>
          <img src={toIcon} alt={toFormat} className="w-10 h-10" />
        </div>
        <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
        <p className="text-xs text-gray-700 leading-snug line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );


};

export default ToolCard;

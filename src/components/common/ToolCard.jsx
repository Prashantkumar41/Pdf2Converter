

// ------------------------------------------------card design----------------

// "use client"
// import { useNavigate } from "react-router-dom"

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
// }

// const ToolCard = ({ title, description, icon, route }) => {
//   const navigate = useNavigate()

//   // Extract format for icon (if using format-based titles)
//   const [fromFormat, , toFormat] = title.split(" ")
//   const cardIcon = formatToIcon[fromFormat] || icon

//   return (
//     <div
//       onClick={() => navigate(route)}
//       className="group bg-white cursor-pointer rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg p-6 h-full flex flex-col"
//     >
//       {/* Icon Section */}
//       <div className="flex justify-center mb-4">
//         <div className="w-16 h-16 flex items-center justify-center">
//           <img src={cardIcon || "/placeholder.svg"} alt={fromFormat || title} className="w-12 h-12 object-contain" />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex-1 text-center">
//         <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
//         <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{description}</p>
//       </div>
//     </div>
//   )
// }

// export default ToolCard


// ---------------------------------------------------------------

import { useNavigate } from "react-router-dom"

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
}

const ToolCard = ({ title, description, icon, route }) => {
  const navigate = useNavigate()

  const [fromFormat, , toFormat] = title.split(" ")
  const fromIcon = formatToIcon[fromFormat] || "/assets/icons/pdf-icon.png"
  const toIcon = formatToIcon[toFormat] || icon

  return (
    <div
      onClick={() => navigate(route)}
      className="group bg-white cursor-pointer rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg p-6 h-full flex flex-col"
    >
      {/* Icon Section with From ➝ To Icons */}
      <div className="flex justify-center mb-4 gap-2 items-center">
        <img src={fromIcon} alt={fromFormat} className="w-10 h-10 object-contain" />
        <span className="text-xl text-gray-500 font-semibold">&gt;</span>
        <img src={toIcon} alt={toFormat || title} className="w-10 h-10 object-contain" />
      </div>

      {/* Content Section */}
      <div className="flex-1 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

export default ToolCard



import React from "react";
import { Link } from "react-router-dom";
// import { toolCategories } from "@/features/pdfTools/toolsGrouped";
import { toolCategories } from "../../features/pdfTools/ToolsData";

// const ToolDropdown = () => {
//   return (
//     <div className="absolute top-full left-0 mt-3 w-screen max-w-6xl bg-white shadow-lg rounded-lg p-6 border z-50">
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//         {toolCategories.map((section, index) => (
//           <div key={index}>
//             <h4 className="font-semibold text-gray-700 mb-2">{section.category}</h4>
//             <ul className="space-y-1 text-sm">
//               {section.tools.map((tool, idx) => (
//                 <li key={idx}>
//                   <Link
//                     to={tool.route}
//                     className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
//                   >
//                     <img src={tool.icon} alt={tool.title} className="w-4 h-4" />
//                     {tool.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ToolDropdown;





export default function ToolDropdown() {
  return (
    <div className="absolute left-0 top-full w-full px-6 lg:px-16 py-10 bg-white shadow-lg z-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">
        {toolCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.tools.map((tool, i) => (
                <li key={i}>
                  <Link
                    to={tool.route}
                    className="flex items-center text-sm text-gray-700 hover:text-black"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.title}
                      className="w-5 h-5 mr-2"
                    />
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
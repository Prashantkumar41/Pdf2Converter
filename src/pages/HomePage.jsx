



// // --------------------------------------
// import React from "react";

// const tools = [
//   {
//     title: "PDF TO CSV",
//     description:
//       "A PDF to CSV converter extracts tabular data from PDFs, transforming it into CSV format for easy data handling and analysis.",
//     icon: "/pdf-icon.png",
//     to: "/csv",
//   },
//   {
//     title: "PDF TO EXCEL",
//     description:
//       "Convert PDFs to Excel effortlessly with high accuracy, preserving data integrity and formatting for seamless spreadsheet integration.",
//     icon: "/excel-icon.png",
//     to: "/excel",
//   },
//   {
//     title: "PDF TO HTML",
//     description:
//       "Convert PDFs to HTML effortlessly, preserving text, images, and formatting for a seamless web-ready document experience.",
//     icon: "/html-icon.png",
//     to: "/html",
//   },
//   {
//     title: "PDF TO JPG",
//     description:
//       "Convert PDFs to high-quality JPG images quickly, preserving clarity and detail for easy use and sharing in various formats.",
//     icon: "/jpg-icon.png",
//     to: "/jpg",
//   },
//   {
//     title: "PDF TO JSON",
//     description:
//       "Convert PDFs to JSON format efficiently, extracting data into a structured, machine-readable format for seamless integration and analysis.",
//     icon: "/json-icon.png",
//     to: "/json",
//   },
// ];

// export default function HomePage() {
//   return (
//     <div className="text-center bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen">
//       {/* ✅ Announcement */}
//       <div className="pt-10 px-4">
//         <p className="bg-purple-100 text-purple-700 text-sm font-medium inline-block py-2 px-6 rounded-full shadow-sm">
//           Announcing our next round of funding.{" "}
//           <a href="#" className="underline">
//             Read more →
//           </a>
//         </p>
//       </div>

//       {/* ✅ Hero Section */}
//       <section className="mt-6 px-4">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
//           All Pdf Tool Converter
//         </h1>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
//           Effortlessly convert your PDF files into various formats including{" "}
//           <span className="font-medium">DOC, JPG, PNG, Excel</span>, and{" "}
//           <span className="font-medium">PPT</span> with our comprehensive
//           conversion tool.
//         </p>

//         {/* <div className="flex justify-center gap-4 mb-14">
//           <button className="bg-black text-white text-base font-medium px-6 py-3 rounded hover:bg-gray-900 transition">
//             Get started
//           </button>
//           <button className="border border-black text-black text-base font-medium px-6 py-3 rounded hover:bg-gray-100 transition">
//             Learn more →
//           </button>
//         </div> */}

//         <div className="flex justify-center gap-4 mb-14">
//           <button className="bg-black text-white text-base font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition">
//             Get started
//           </button>
//           <button className="border border-black text-black text-base font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
//             Learn more →
//           </button>
//         </div>

//       </section>

//       {/* ✅ PDF Tool Cards */}
//       <section id="tools" className="px-4 pb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
//           {tools.map((tool, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-lg">📄</span>
//                 <span className="text-lg">➡</span>
//                 <img src={tool.icon} alt={tool.title} className="w-7 h-7" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {tool.title}
//               </h3>
//               <p className="text-sm text-gray-600">{tool.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Transform Section */}
//       <section className="text-center py-20 px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
//           Effortlessly Transform <br />
//           <span className="text-purple-500">PDFs into Multiple Formats</span>{" "}
//           <br />
//           for Easy <span className="text-blue-600">Data Management.</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-600 mb-8">
//           Effortlessly convert any document to PDF with our versatile PDF-to-All
//           Converter. This tool supports various formats, ensuring seamless
//           transitions for all your files. Whether you need to convert text,
//           images, or spreadsheets, our converter delivers high-quality results
//           quickly and efficiently. Simplify your document management today!
//         </p>
//         <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-900 transition">
//           Contact Us
//         </button>
//       </section>

//       {/* ✅ Features Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-2">Features</h2>
//             <p className="max-w-xl mx-auto text-gray-600">
//               The product can personalize user experiences by understanding
//               individual preferences and tailoring recommendations or content
//               based on user behavior and historical data.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Multi-format Conversion",
//                 desc: "Convert PDF files into Word, Excel, PPT, images, and more for versatile usage.",
//                 icon: "🅝",
//               },
//               {
//                 title: "Batch Conversion",
//                 desc: "Convert multiple PDFs simultaneously, saving time and effort for bulk processing.",
//                 icon: "⚙️",
//               },
//               {
//                 title: "High-quality Output",
//                 desc: "Retain original formatting, fonts, and images, ensuring accurate document reproduction.",
//                 icon: "🖨️",
//               },
//               {
//                 title: "Fast Processing",
//                 desc: "Enjoy swift conversion speeds, optimizing workflow and minimizing wait times.",
//                 icon: "💨",
//               },
//               {
//                 title: "Secure File Handling",
//                 desc: "Protect sensitive documents with encryption and auto deletion after conversion.",
//                 icon: "🔐",
//               },
//               {
//                 title: "User-friendly Interface",
//                 desc: "Intuitive design makes conversion simple, even for non-technical users.",
//                 icon: "🎯",
//               },
//             ].map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white shadow-md rounded-lg p-6 text-center"
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// -----------------------------------------------------------------


import React from "react";
import { pdfTools } from "../features/pdfTools/toolsData";
import ToolCard from "../components/common/ToolCard";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white min-h-screen">
      {/* ✅ Announcement */}
      <div className="pt-10 px-4 text-center">
        <p className="bg-purple-100 text-purple-700 text-sm font-medium inline-block py-2 px-6 rounded-full shadow-sm">
          Announcing our next round of funding. <a href="#" className="underline">Read more →</a>
        </p>
      </div>

      {/* ✅ Hero Section */}
      <section className="mt-6 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          All PDF Tool Converter
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Effortlessly convert your PDF files into various formats including <span className="font-medium">DOC, JPG, PNG, Excel</span>, and <span className="font-medium">PPT</span> with our comprehensive conversion tool.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <button className="bg-black text-white text-base font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Get started
          </button>
          <button className="border border-black text-black text-base font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Learn more →
          </button>
        </div>
      </section>

      {/* ✅ PDF Tool Cards */}
      {/* <section id="tools" className="px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {pdfTools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              route={tool.route}
            />
          ))}
        </div>
      </section> */}

      <section id="tools" className="w-full pb-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10">
    {pdfTools.map((tool, index) => (
      <ToolCard
        key={index}
        title={tool.title}
        description={tool.description}
        icon={tool.icon}
        route={tool.route}
      />
    ))}
  </div>
</section>




      {/* ✅ Transform Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Effortlessly Transform <br />
          <span className="text-purple-500">PDFs into Multiple Formats</span><br />
          for Easy <span className="text-blue-600">Data Management.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-sm sm:text-base">
          Effortlessly convert any document to PDF with our versatile PDF-to-All Converter. This tool supports various formats, ensuring seamless transitions for all your files. Whether you need to convert text, images, or spreadsheets, our converter delivers high-quality results quickly and efficiently. Simplify your document management today!
        </p>
        <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-900 transition">
          Contact Us
        </button>
      </section>

      {/* ✅ Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Features</h2>
            <p className="max-w-xl mx-auto text-gray-600">
              The product can personalize user experiences by understanding individual preferences and tailoring recommendations or content based on user behavior and historical data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Multi-format Conversion", desc: "Convert PDF files into Word, Excel, PPT, images, and more for versatile usage.", icon: "🅝" },
              { title: "Batch Conversion", desc: "Convert multiple PDFs simultaneously, saving time and effort for bulk processing.", icon: "⚙️" },
              { title: "High-quality Output", desc: "Retain original formatting, fonts, and images, ensuring accurate document reproduction.", icon: "🖨️" },
              { title: "Fast Processing", desc: "Enjoy swift conversion speeds, optimizing workflow and minimizing wait times.", icon: "💨" },
              { title: "Secure File Handling", desc: "Protect sensitive documents with encryption and auto deletion after conversion.", icon: "🔐" },
              { title: "User-friendly Interface", desc: "Intuitive design makes conversion simple, even for non-technical users.", icon: "🎯" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

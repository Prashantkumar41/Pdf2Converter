// src/features/pdfTools/toolsData.js
export const pdfTools = [
  {
    title: "PDF TO CSV",
    description: "Convert PDF to CSV for easy data analysis.",
    icon: "/assets/icons/csv-icon.png",
    route: "/pdf-to-csv",
  },
  {
    title: "PDF TO EXCEL",
    description: "Preserve tables and formatting while converting PDF to Excel.",
    icon: "/assets/icons/excel-icon.png",
    route: "/pdf-to-excel",
  },
  {
    title: "PDF TO HTML",
    description: "Convert PDFs into HTML for web-ready documents.",
    icon: "/assets/icons/html-icon.png",
    route: "/pdf-to-html",
  },
  {
    title: "PDF TO JPG",
    description: "Get high-quality images from your PDFs.",
    icon: "/assets/icons/jpg-icon.png",
    route: "/pdf-to-jpg",
  },
  {
    title: "PDF TO JSON",
    description: "Extract structured data from PDF into JSON.",
    icon: "/assets/icons/json-icon.png",
    route: "/pdf-to-json",
  },
  {
    title: "PDF TO PNG",
    description: "Convert PDF files to high-resolution PNGs.",
    icon: "/assets/icons/png-icon.png",
    route: "/pdf-to-png",
  },
  {
    title: "PDF TO WORD",
    description: "Edit PDFs by converting them to Word documents.",
    icon: "/assets/icons/word-icon.png",
    route: "/pdf-to-word",
  },
  {
    title: "PDF TO XML",
    description: "Extract XML data from structured PDFs.",
    icon: "/assets/icons/xml-icon.png",
    route: "/pdf-to-xml",
  },
  {
    title: "PDF TO ZIP",
    description: "Compress PDFs into a ZIP archive.",
    icon: "/assets/icons/zip-icon.png",
    route: "/pdf-to-zip",
  },
  {
    title: "PDF TO WEBP",
    description: "Convert PDF pages into modern WebP images.",
    icon: "/assets/icons/webp-icon.png",
    route: "/pdf-to-webp",
  },
  {
    title: "PDF TO TEXT",
    description: "Extract plain text content from PDFs.",
    icon: "/assets/icons/text-icon.png",
    route: "/pdf-to-text",
  },
  {
    title: "CSV TO PDF",
    description: "Convert CSV data into printable PDF documents.",
    icon: "/assets/icons/csv-icon.png",
    route: "/csv-to-pdf",
  },
  {
    title: "EXCEL TO PDF",
    description: "Export Excel spreadsheets into PDF format.",
    icon: "/assets/icons/excel-icon.png",
    route: "/excel-to-pdf",
  },
  {
    title: "HTML TO PDF",
    description: "Generate polished PDFs from HTML files.",
    icon: "/assets/icons/html-icon.png",
    route: "/html-to-pdf",
  },
  {
    title: "JPG TO PDF",
    description: "Merge images into a single PDF document.",
    icon: "/assets/icons/jpg-icon.png",
    route: "/jpg-to-pdf",
  },
  {
    title: "JSON TO PDF",
    description: "Convert JSON data to neat, formatted PDF.",
    icon: "/assets/icons/json-icon.png",
    route: "/json-to-pdf",
  },
  {
    title: "PNG TO PDF",
    description: "Combine PNG images into one PDF.",
    icon: "/assets/icons/png-icon.png",
    route: "/png-to-pdf",
  },
  {
    title: "SPEECH TO PDF",
    description: "Turn speech transcripts into shareable PDFs.",
    icon: "/assets/icons/voice-icon.png",
    route: "/speech-to-pdf",
  },
  {
    title: "TEXT TO PDF",
    description: "Create PDFs from plain text documents.",
    icon: "/assets/icons/text-icon.png",
    route: "/text-to-pdf",
  },
  {
    title: "WEBP TO PDF",
    description: "Convert WebP images to standard PDFs.",
    icon: "/assets/icons/webp-icon.png",
    route: "/webp-to-pdf",
  },
  {
    title: "XML TO PDF",
    description: "Convert XML structured data into readable PDF.",
    icon: "/assets/icons/xml-icon.png",
    route: "/xml-to-pdf",
  },
];




// --------------------------------------------


export const toolCategories = [
  {
    category: "ORGANIZE PDF",
    tools: [
      { title: "Merge PDF", icon: "🔗", route: "/merge-pdf" },
      { title: "Split PDF", icon: "✂️", route: "/split-pdf" },
      { title: "Remove pages", icon: "❌", route: "/remove-pages" },
      { title: "Extract pages", icon: "📄", route: "/extract-pages" },
      { title: "Organize PDF", icon: "🗂️", route: "/organize-pdf" },
      { title: "Scan to PDF", icon: "📷", route: "/scan-to-pdf" },
    ],
  },
  {
    category: "OPTIMIZE PDF",
    tools: [
      { title: "Compress PDF", icon: "🗜️", route: "/compress-pdf" },
      { title: "Repair PDF", icon: "🛠️", route: "/repair-pdf" },
      { title: "OCR PDF", icon: "🔍", route: "/ocr-pdf" },
    ],
  },
  {
    category: "CONVERT TO PDF",
    tools: [
      { title: "JPG to PDF", icon: "🖼️", route: "/jpg-to-pdf" },
      { title: "WORD to PDF", icon: "📄", route: "/word-to-pdf" },
      { title: "POWERPOINT to PDF", icon: "📊", route: "/ppt-to-pdf" },
      { title: "EXCEL to PDF", icon: "📈", route: "/excel-to-pdf" },
      { title: "HTML to PDF", icon: "🌐", route: "/html-to-pdf" },
    ],
  },
  {
    category: "CONVERT FROM PDF",
    tools: [
      { title: "PDF to JPG", icon: "🖼️", route: "/pdf-to-jpg" },
      { title: "PDF to WORD", icon: "📄", route: "/pdf-to-word" },
      { title: "PDF to POWERPOINT", icon: "📊", route: "/pdf-to-ppt" },
      { title: "PDF to EXCEL", icon: "📈", route: "/pdf-to-excel" },
      { title: "PDF to PDF/A", icon: "🗂️", route: "/pdf-to-pdfa" },
    ],
  },
  {
    category: "EDIT PDF",
    tools: [
      { title: "Rotate PDF", icon: "🔁", route: "/rotate-pdf" },
      { title: "Add page numbers", icon: "🔢", route: "/add-page-numbers" },
      { title: "Add watermark", icon: "💧", route: "/add-watermark" },
      { title: "Crop PDF", icon: "✂️", route: "/crop-pdf" },
      { title: "Edit PDF", icon: "📝", route: "/edit-pdf" },
    ],
  },
  {
    category: "PDF SECURITY",
    tools: [
      { title: "Unlock PDF", icon: "🔓", route: "/unlock-pdf" },
      { title: "Protect PDF", icon: "🔒", route: "/protect-pdf" },
      { title: "Sign PDF", icon: "✍️", route: "/sign-pdf" },
      { title: "Redact PDF", icon: "🛑", route: "/redact-pdf" },
      { title: "Compare PDF", icon: "📑", route: "/compare-pdf" },
    ],
  },
];


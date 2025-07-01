import React from "react";
import ToolCard from "../components/ToolCard";

const tools = [
  { title: "PDF to Word", description: "Convert PDF files to Word docs" },
  { title: "Word to PDF", description: "Convert Word docs to PDF" },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tools.map((tool, i) => (
        <ToolCard key={i} title={tool.title} description={tool.description} />
      ))}
    </div>
  );
}

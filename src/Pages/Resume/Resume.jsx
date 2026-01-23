import React from "react";
import PdfViewer from "../../SharedComponent/PDFViewer/PdfViewer";
import resume from "../../assets/Resume/Nilesh_Resume.pdf";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-900 text-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-8 px-4 md:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-500">My Resume</h1>
          <a
            href={resume}
            download="Nilesh_Resume.pdf"
            className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full transition-colors font-medium"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        <div className="rounded-xl shadow-2xl overflow-hidden">
          <PdfViewer src={resume} />
        </div>
      </div>
    </div>
  );
};

export default Resume;

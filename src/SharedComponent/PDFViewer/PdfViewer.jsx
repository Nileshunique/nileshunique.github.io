import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Use CDN worker to avoid local server MIME type issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;

const PdfViewer = ({ src }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  if (!src) {
    return (
      <div className="text-xs text-gray-500">
        No download link available for this document.
      </div>
    );
  }

  const handleLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
    setError(null);
  };

  const handleLoadError = (err) => {
    console.error("Error loading PDF with react-pdf:", err);
    setError(
      "Unable to load interactive PDF preview. Please check the browser console for details, or use the Download button to open it directly.",
    );
  };

  return (
    <div className="relative rounded-lg overflow-auto h-full min-h-[500px]">
      <div className="flex justify-center p-4">
        <Document
          file={src}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={handleLoadError}
          loading={<div className="text-xs text-gray-600">Loading PDF...</div>}
        >
          {numPages &&
            Array.from(new Array(numPages), (_el, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-8 last:mb-0 shadow-lg"
              >
                <Page pageNumber={index + 1} width={window.innerWidth * 0.9} />
              </div>
            ))}
        </Document>
      </div>

      {error && (
        <div className="px-4 pb-3">
          <div className="text-xs text-gray-600">{error}</div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;

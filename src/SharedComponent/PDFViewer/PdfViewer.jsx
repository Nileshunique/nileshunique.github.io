import { useState } from "react";
import Typography from "@/Components/Typography/Typography";
import { colorTheme } from "@/Themes/colorTheme";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
// Use CDN worker to avoid local server MIME type issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
// Configure pdf.js worker for react-pdf 10.x (CDN approach)

const PdfViewer = ({ src }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  if (!src) {
    return (
      <Typography
        variant="body2"
        className="text-xs"
        style={{ color: colorTheme.gray[500] }}
      >
        No download link available for this document.
      </Typography>
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
    <div className="border relative rounded-lg overflow-auto bg-gray-100 h-[450px]">
      <div className="flex justify-center p-4">
        <Document
          file={src}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={handleLoadError}
          loading={
            <Typography
              variant="body2"
              className="text-xs"
              style={{ color: colorTheme.gray[600] }}
            >
              Loading PDF...
            </Typography>
          }
        >
          {numPages &&
            Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={800}
              />
            ))}
        </Document>
      </div>

      {error && (
        <div className="px-4 pb-3">
          <Typography
            variant="body2"
            className="text-xs"
            style={{ color: colorTheme.gray[600] }}
          >
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;

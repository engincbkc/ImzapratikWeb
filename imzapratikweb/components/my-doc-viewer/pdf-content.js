import { useEffect, useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import PdfToolbar from "./pdf-popup-toolbar";

function PdfContent({file}) {
    const pdfRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1.0);
    let pdf;

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < numPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handleZoomIn = () => {
        setScale(scale + 0.1);
    };

    const handleZoomOut = () => {
        setScale(scale - 0.1);
    };

    const handleDownloadPdf = () => {
        
        const pdfFile = file;
        pdf = pdfFile;
        const url = URL.createObjectURL(pdfFile);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'belge.pdf';
        link.click();

        URL.revokeObjectURL(url);
        
    };

    //   const toggleFullScreen = () => {
    //     if (!document.fullscreenElement) {
    //       document.documentElement.requestFullscreen();
    //     } else if (document.exitFullscreen) {
    //       document.exitFullscreen();
    //     }
    //   };

    const handlePrint = () => {
        window.print(); //tüm ekranı printlemek istemiyorum sadece verilen pdf dosyasını printlemek istiyorum
        // files[0].print();
    };

        return (
            <>
            <PdfToolbar
            scale={scale}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            currentPage={currentPage}
            numPages={numPages}
            onDownloadPdf={handleDownloadPdf}
            //onFullscreen={toggleFullScreen}
            onPrint={handlePrint}
            />
            <div
            ref={pdfRef}
            style={{
                backgroundColor: '#fefefe',
                borderRadius: '8px',
                padding: '20px',
                height: '550px',
                overflowY: 'auto'
            }}
            >
             
            <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                <Page key={currentPage} pageNumber={currentPage} scale={scale} />
            </Document>
            
            </div>
            </>
        );
}

export default PdfContent;
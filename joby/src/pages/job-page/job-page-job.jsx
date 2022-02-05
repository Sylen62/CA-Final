/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Container } from '@mui/material';
import PDF from './Pro.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// Nezinau ar reikia
const options = {
  cMapUrl: `//unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps`,
  cMapPacked: true,
};

const JobPageJob = () => {
  const [file, setFile] = useState(''); // ./pedeef.pdf
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setFile(PDF);
  }, []);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const onDocumentLoadSuccess = ({ nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 124px)', py: '7vh' }}>
      Job information
      {/* <img src="./pedeef.pdf" alt="" /> */}
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>
          {' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadError={(error) => console.log(error)}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </Container>
  );
};

export default JobPageJob;

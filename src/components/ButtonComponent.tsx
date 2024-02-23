import React from 'react';
import "./cssComponents/button.css";
import { FaFilePdf } from "react-icons/fa"; // Importe o ícone de PDF

interface DownloadButtonProps {
  text: string;
  fileUrl: string;
  fileName: string; // Nome do arquivo como prop obrigatória
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, fileUrl, fileName }) => {
  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      
      link.download = fileName || 'download'; 
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button className="buttonStyle" onClick={handleDownload}>
      <FaFilePdf className='iconPDF'/> {text} 
    </button>
  );
};

export default DownloadButton;

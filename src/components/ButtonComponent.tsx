import React from 'react';
import "./cssComponents/button.css"

interface DownloadButtonProps {
  text: string;
  fileUrl?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, fileUrl }) => {
  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop() || 'download'; // Se não for possível extrair o nome do arquivo, define um nome padrão
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button className="buttonStyle" onClick={handleDownload}>
      {text}
    </button>
  );
};

export default DownloadButton;

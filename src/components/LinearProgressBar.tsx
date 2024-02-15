import React from "react";
import "./cssComponents/LinearProgressBar.css";

interface LinearProgressBarProps {
  progress: number; // Número de 0 a 4
  text: string; // Texto para indicar o significado da barra
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  progress,
  text,
}) => {
  const getLabelText = (progress: number): string => {
    switch (progress) {
      case 0:
        return "Ruim";
      case 1:
        return "Básico";
      case 2:
        return "Bom";
      case 3:
        return "Muito Bom";
      case 4:
        return "Fluente";
      default:
        return "";
    }
  };

  const getLabelPosition = (progress: number): string => {
    switch (progress) {
      case 0:
        return "0%";
      case 1:
        return "25%";
      case 2:
        return "50%";
      case 3:
        return "75%";
      case 4:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className="linear-progress-bar">
      <div className="label-texts">
        <div className="progress-text">{text}</div>
        <div
          className="progress-label"
          style={{ left: getLabelPosition(progress) }}
        >
          {getLabelText(progress)}
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress * 25}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LinearProgressBar;

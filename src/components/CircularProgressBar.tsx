import React from "react";
import "./cssComponents/CircularProgressBar.css";

interface CircularProgressBarProps {
  progress: number;
  text: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  text,
}) => {
  // Calcula o ângulo da porcentagem
  const angle = (progress / 10) * 360;

  // Calcula o comprimento do perímetro do círculo
  const circumference = 2 * Math.PI * 50; // Raio é 50

  // Calcula o comprimento da linha de progresso
  const progressLength = (angle / 360) * circumference;

  return (
    <div className="circular">
      <svg className="circular-progress" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#15b9b9" />
            <stop offset="100%" stop-color="#3c1dff" />
          </linearGradient>
        </defs>
        <circle className="background-circle" cx="50" cy="50" r="45" />
        <circle
          className="progress-circle"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressLength}
        />
        <text x="50" y="57" className="progress-text" style={{ fontSize: "24px" }}>
          {progress}
        </text>
      </svg>

      <div className="circularSkill">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;

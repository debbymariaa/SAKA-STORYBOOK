import React, { useEffect } from "react";
import "../components/styles/toast.css";

interface ToastProps {
  message1: string;
  message2: string;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({ message1, message2, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast">
      <h1 className="toast-message1">{message1}</h1>
      <p className="toast-message2">{message2}</p>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

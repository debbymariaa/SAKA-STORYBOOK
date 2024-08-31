import React, { useEffect } from "react";
import "./styles/toast.css";

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
}

export const Toast = ({ message, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast">
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

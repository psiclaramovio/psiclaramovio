// components/ToastContainer.tsx
import React from "react";
import { Toast } from "@/types/toast";

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  if (toasts.length === 0) return null;

  const getToastStyles = (type: Toast["type"]) => {
    const baseStyles =
      "min-w-80 p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-out transform hover:-translate-x-1";

    switch (type) {
      case "success":
        return `${baseStyles} bg-green-500 text-white`;
      case "error":
        return `${baseStyles} bg-red-500 text-white`;
      case "warning":
        return `${baseStyles} bg-yellow-500 text-white`;
      case "info":
        return `${baseStyles} bg-blue-500 text-white`;
      default:
        return `${baseStyles} bg-gray-500 text-white`;
    }
  };

  const getIcon = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
        return "ℹ";
      default:
        return "•";
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 md:top-6 md:right-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${getToastStyles(toast.type)} animate-slide-in-right`}
          onClick={() => removeToast(toast.id)}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{getIcon(toast.type)}</span>
            <span className="flex-1">{toast.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;

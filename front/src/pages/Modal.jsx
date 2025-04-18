import React, { useEffect } from "react";

const Modal = ({ isOpen, message, type }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const closeModalEvent = new CustomEvent("closeModal");
        window.dispatchEvent(closeModalEvent);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalStyle = {
    backgroundColor: type === "success" ? "#d1fae5" : "#fee2e2",
    color: type === "success" ? "#065f46" : "#991b1b",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        padding: "1rem 2rem",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        fontSize: "1rem",
        maxWidth: "90%",
        width: "300px",
        textAlign: "center",
        ...modalStyle,
      }}
    >
      {message}
    </div>
  );
};

export default Modal;

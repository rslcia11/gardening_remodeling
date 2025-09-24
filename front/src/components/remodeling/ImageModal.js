
import { X } from "lucide-react";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="image-modal-overlay open"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.95)", backdropFilter: "blur(5px)" }}
    >
      <div
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
          maxWidth: "95vw",
          maxHeight: "95vh",
        }}
      >
        <button
          className="modal-close-button"
          onClick={onClose}
          style={{ position: "fixed", top: "20px", right: "20px", zIndex: 10000 }}
        >
          <X size={18} />
        </button>
        {image?.before ? (
          <div
            className="modal-before-after"
            style={{ display: "flex", gap: "20px", background: "transparent", border: "none" }}
          >
            <div className="modal-before" style={{ flex: 1, background: "transparent", border: "none" }}>
              <img
                src={image.before || "/placeholder.svg"}
                alt="Imagen antes"
                style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
              />
            </div>
            <div className="modal-after" style={{ flex: 1, background: "transparent", border: "none" }}>
              <img
                src={image.after || "/placeholder.svg"}
                alt="Imagen después"
                style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
              />
            </div>
          </div>
        ) : image?.single ? (
          <div className="modal-single-image" style={{ background: "transparent", border: "none" }}>
            <img
              src={image.single || "/placeholder.svg"}
              alt="Imagen"
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageModal;


import { X } from "lucide-react";

const ImageModal = ({ isImageModalOpen, closeImageModal, selectedImage }) => {
  if (!isImageModalOpen) return null;

  return (
    <div
      className="image-modal-overlay"
      onClick={closeImageModal}
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
          onClick={closeImageModal}
          style={{ position: "fixed", top: "20px", right: "20px", zIndex: 10000 }}
        >
          <X size={20} />
        </button>
        {selectedImage?.before ? (
          <div
            className="modal-before-after"
            style={{ display: "flex", gap: "20px", background: "transparent", border: "none" }}
          >
            <div className="modal-before" style={{ flex: 1, background: "transparent", border: "none" }}>
              <img
                src={selectedImage.before || "/placeholder.svg"}
                alt={`Before: ${selectedImage.title}`}
                style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
              />
            </div>
            <div className="modal-after" style={{ flex: 1, background: "transparent", border: "none" }}>
              <img
                src={selectedImage.after || "/placeholder.svg"}
                alt={`After: ${selectedImage.title}`}
                style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
              />
            </div>
          </div>
        ) : selectedImage?.single ? (
          <div className="modal-single-image" style={{ background: "transparent", border: "none" }}>
            <img
              src={selectedImage.single || "/placeholder.svg"}
              alt={selectedImage.title}
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageModal;

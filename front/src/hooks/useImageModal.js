import { useState, useEffect } from 'react';

export default function useImageModal() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    if (typeof image === "string") {
      setSelectedImage({
        single: image,
        title: "Jimenez Services",
      });
    } else if (image.beforeImage) {
      setSelectedImage({
        title: image.title,
        before: image.beforeImage,
        after: image.image,
      });
    } else {
      setSelectedImage(image);
    }

    setIsImageModalOpen(true);
    document.body.classList.add("modal-open");

    requestAnimationFrame(() => {
      const overlay = document.querySelector(".image-modal-overlay");
      if (overlay) {
        overlay.classList.add("open");
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
      }
    });
  };

  const closeImageModal = () => {
    const overlay = document.querySelector(".image-modal-overlay");
    if (overlay) overlay.classList.remove("open");

    setTimeout(() => {
      document.body.classList.remove("modal-open");
      setIsImageModalOpen(false);
      setSelectedImage(null);
    }, 300);
  };

  useEffect(() => {
    if (isImageModalOpen) {
      const fixModal = () => {
        const overlay = document.querySelector(".image-modal-overlay");
        if (overlay) {
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";

          const containers = overlay.querySelectorAll("div");
          containers.forEach((container) => {
            container.style.backgroundColor = "transparent";
            container.style.background = "transparent";
            container.style.border = "none";
            container.style.boxShadow = "none";
          });

          const images = overlay.querySelectorAll("img");
          images.forEach((img) => {
            img.style.maxWidth = "90vw";
            img.style.maxHeight = "85vh";
            img.style.width = "auto";
            img.style.height = "auto";
            img.style.objectFit = "contain";
            img.style.border = "none";
            img.style.boxShadow = "none";
            img.style.background = "transparent";
          });
        }
      };

      fixModal();
      const interval = setInterval(fixModal, 100);

      return () => clearInterval(interval);
    }
  }, [isImageModalOpen]);

  return { isImageModalOpen, selectedImage, openImageModal, closeImageModal };
}

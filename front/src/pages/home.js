import useSEO from "../hooks/useSEO";
import useImageModal from "../hooks/useImageModal";
import useAnimations from "../hooks/useAnimations";
import useScrollToTop from "../hooks/useScrollToTop";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import ContactForm from "../components/ContactForm";
import ImageModal from "../components/home/ImageModal";

import "./home.css";

export default function Home() {
  useSEO({
    title: "Top-Rated Landscaping & Remodeling Services in NJ | Jimenez Services LLC",
    description:
      "Transform your property with Jimenez Services LLC, New Jersey's top-rated landscaping and remodeling contractor. We offer professional, reliable, and affordable solutions. Get a free quote!",
    keywords:
      "landscaping New Jersey, remodeling NJ, snow removal Little Ferry, construction services, garden maintenance, home renovation, property services",
    ogUrl: window.location.href,
    ogImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg",
  });

  useAnimations();
  useScrollToTop();

  const { isImageModalOpen, selectedImage, openImageModal, closeImageModal } = useImageModal();

  return (
    <div className="home-container">
      <Hero openImageModal={openImageModal} />
      <About openImageModal={openImageModal} />
      <Services />
      <Portfolio openImageModal={openImageModal} />
      <Testimonials openImageModal={openImageModal} />
      <ContactForm />
      <ImageModal
        isImageModalOpen={isImageModalOpen}
        closeImageModal={closeImageModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}
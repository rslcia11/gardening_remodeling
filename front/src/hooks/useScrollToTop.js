import { useEffect } from 'react';

export default function useScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();

    const handlePopState = () => {
      scrollToTop();
    };

    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollToTop", "true");
    };

    if (sessionStorage.getItem("scrollToTop") === "true") {
      scrollToTop();
      sessionStorage.removeItem("scrollToTop");
    }

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
}

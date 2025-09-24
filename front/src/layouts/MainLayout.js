
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/SEO/StructuredData";
import { localBusinessSchema } from "../data/schema";

const MainLayout = ({ children }) => {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

import Footer from "@/features/Footer/Footer";
import Hero from "@/features/Hero/Hero";
import Home from "@/features/Home/Home";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Home />
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default page;

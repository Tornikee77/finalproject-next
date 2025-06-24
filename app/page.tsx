import Footer from "@/features/Footer/Footer";
import Hero from "@/features/Hero/Hero";
import Home from "@/features/Home/Home";
import LearningLang from "@/features/LearnLang/LearningLang";
import IncreVocabulary from "@/features/Vocabulary/IncreVocabulary";
import WatchProgres from "@/features/WatchProgres/WatchProgres";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Home />
        <Hero />
        <LearningLang />
        <IncreVocabulary />
        <WatchProgres />
      </main>
      <Footer />
    </div>
  );
};

export default page;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default App;

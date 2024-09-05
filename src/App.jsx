import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="className=max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Carousel />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default App;

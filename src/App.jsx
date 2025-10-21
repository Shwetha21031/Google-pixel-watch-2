import React from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  Footer,
  Pricing,
  Testimonials,
  About,
  FrequentQuestions,
} from "./sections";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonials />
      <FrequentQuestions />
      <Footer />
    </>
  );
};

export default App;

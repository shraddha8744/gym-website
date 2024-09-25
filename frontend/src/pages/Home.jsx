import React from "react";
import Banner from "../components/Banner";
import WorkOutSession from "../components/WorkOutSession";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import BMICalculator from "../components/BMICalculator";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkOutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
    </div>
  );
};

export default Home;

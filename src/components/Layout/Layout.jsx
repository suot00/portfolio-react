import React, { Fragment } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Section from "../Hero-Section/HeroSection";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonial/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Section />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Layout;

import React from "react";
import Layout from "../components/Layout";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import Process from "./Process";

// import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
    </Layout>
  );
};

export default App;

// import React from "react";
// import Card from "./components/Card";
// import Informationbadge from "./components/Informationbadge";

// import { Navbar } from "../components/Navbar";
import CarouselCard from "../components/Carousel";
import { Footer } from "../components/Footer";
import Stat from "../components/Stat";
import Informationbadge from "../components/Informationbadge";
import Header from "../components/Navbar";
// import { Navbar } from "../components/Navbar";
const Mainpage = () => {
  return (
  <div>
     <Header />
    <CarouselCard />
    <Informationbadge /> 
    {/* <Card /> */}
    <Stat />
    <Footer />
  </div>
  );
};

export default Mainpage;

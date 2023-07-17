
import CarouselCard from "../components/Carousel";
import { Footer } from "../components/Footer";
import Stat from "../components/Stat";
import Informationbadge from "../components/Informationbadge";
import Header from "../components/Navbar";

const Mainpage = () => {
  return (
  <div>
     <Header />
    <CarouselCard />
    <Informationbadge /> 
    <Stat />
    <Footer />
  </div>
  );
};

export default Mainpage;

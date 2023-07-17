
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import photo5 from "../assets/photo5.jpg"



const Caromain = () => (
  // <img src={photo1} className='h-96 object-fill w-full' />
  <AutoplaySlider
    play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={2000}
    bullets={false}
  >
    <div data-src={photo1} />
    <div data-src={photo2} />
    <div data-src={photo3} />
    <div data-src={photo4} />
    <div data-src={photo5} />
  </AutoplaySlider>
);

export default Caromain;
   
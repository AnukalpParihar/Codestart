import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";


const Services = () => {
  return (
    <div>
      <Carousel
       
       infiniteLoop
       autoPlay
       showStatus={false}
       showArrows={false}
       showThumbs={false}
       interval={900}
      //  initialSlide={0}
     >
       {/* <!-- slides go here --> */}
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
       <div>

<h1>Services </h1>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aperiam ratione repellendus minus! Dolorum nesciunt  asperiores aliquam animi, totam eos tenetur autem! Dolore fuga aspernatur itaque aliquid minus quis harum.

 </div>

     </div>
     
   );
}

export default Services;

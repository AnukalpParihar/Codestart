import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";
  
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> Codestar</h1>
          <p>Solution to your all coding problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt=" Grpahics" />
        <div>
          <p>
            We are your one and only solution for your daily life codeing problems
            you face
            every day.We are leading teach company whose aim is to 
            increase the 
            problem solving abiltiy in childer or a new devleper.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente facere blanditiis modi illum est beatae cupiditate, ullam quia qui maxime molestias tempore illo sit ipsa eaque hic commodi nemo?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste itaque doloribus, molestiae sequi natus, debitis ipsam, perspiciatis quidem autem praesentium impedit. Modi nobis doloribus debitis enim. Magnam nemo ratione quae!
            </p>
        </div>
      </div>

      <div className="home4" id="brands" >
        <div>
            <h1>Brand</h1>
            <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

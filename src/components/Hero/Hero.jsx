import React from "react";
import './Hero.css'
import heroImage from "../../assets/hero.png";
const Hero = () => {
  return (
    <section id="hero">
      <div className="background">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="contact">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className="search">
        <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search your location"/>
        </div>
        <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date"/>
        </div>
        <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
        </div>
        <button>Explore Now</button>
      </div>
      </div>
    </section>
  );
};

export default Hero;

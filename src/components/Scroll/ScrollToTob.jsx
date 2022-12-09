import React, { useState } from "react";
import "./ScrollToTob.css";
import logo from "../../assets/logo.png";
const ScrollToTob = () => {
  const [scroll, setScroll] = useState("false");
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScroll("true") : setScroll("false");
  });
  return (
    <section id="scroll">
      <div  onClick={toTop} scroll={scroll} className={ window.pageYOffset > 200 ? "":'hidden'} scrollState={scroll}>
        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default ScrollToTob;

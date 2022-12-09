import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import ResponsiveNav from "./ResponsiveNav";
const Navbar = () => {
  const [ActiveNav , setActiveNav] = useState("#home")
  const [navState , setNavState] = useState(false)
  return (
    <>
      <nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travelo
          </div>
          <div className="toggle">
            {navState ? (
              <VscChromeClose className="close_menu" onClick={() => setNavState(false)} />
            ) : (
              <HiMenu className="menu" onClick={() => setNavState(true)} />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a 
            href="#home"
            onClick={()=>setActiveNav("#home")}
            className={ActiveNav === '#home' ? 'active' : ''}
            >Home</a>
          </li>
          <li>
            <a href="#services"
             onClick={()=>setActiveNav("#services")}
             className={ActiveNav === '#services' ? 'active' : ''}
            >Services</a>
          </li>
          <li>
            <a href="#recommend"
               onClick={()=>setActiveNav("#recommend")}
               className={ActiveNav === '#recommend' ? 'active' : ''}
            >Places</a>
          </li>
          <li>
            <a href="#testimonials"
             onClick={()=>setActiveNav("#testimonials")}
             className={ActiveNav === '#testimonials' ? 'active' : ''}
            >Testimonials</a>
          </li>
        </ul>
          <button>Connect</button>
      </nav>
      <ResponsiveNav navState={navState} setNavState={setNavState}/>
    </>
  );
};

export default Navbar;

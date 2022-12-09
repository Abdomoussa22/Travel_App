import React from 'react'
import './ResponsiveNav.css'
const ResponsiveNav = ({navState,setNavState}) => {
  return (
    <div id='res_nav' className={navState ?'open':'close'}>
       <ul>
          <li>
            <a href="#home" onClick={() => setNavState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
    </div>
  )
}

export default ResponsiveNav

import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Recommend from './components/Recommend/Recommend';
import ScrollToTob from './components/Scroll/ScrollToTob';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Scrollreveal from 'scrollreveal';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const sr = Scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTob/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;

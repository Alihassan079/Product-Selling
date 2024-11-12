import React from 'react'
import  AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Hero from '../Components/Hero/Hero';
import Products from '../Components/Products/Products';
import TopProducts from '../Components/TopProducts/TopProducts';
import Banner from '../Components/Banner/Banner';
import Subscribe from '../Components/Subscribe/Subscribe';
import Testimonials from '../Components/Testimonials/Testimonials';


const Home = () => {
    const[orderPopup, setOrderPopup] = useState (false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay:100,
      });
      AOS.refresh();
    }, []);

  return (
    <div>
         <Hero handleOderPopup={handleOrderPopup}/>
     <Products/>
     <TopProducts handleOrderPopup={handleOrderPopup}/>
     <Banner/>
     <Subscribe/>
     <Testimonials/>

    </div>
  )
}

export default Home
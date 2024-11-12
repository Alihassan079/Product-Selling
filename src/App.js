import  AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TopRated from "./Pages/TopRated";
import KidsWear from "./Pages/KidsWear";
import MensWear from "./Pages/MensWear";
import Electronics from "./Pages/Electronics";
import Home from "./Pages/Home";
import TrendingProducts from "./Pages/TrendingProducts";
import BestSelling from "./Pages/BestSelling";
import WomensWear from "./Pages/WomensWear";
import CartProvider from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
function App() {
  const[orderPopup, setOrderPopup] = useState (false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);0
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
    <CartProvider>
    <Router>
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOderPopup={handleOrderPopup}/>
<Routes>
<Route path="/" element={<Home />} />
      
        <Route path="/kids-wear" element={<KidsWear />} />
        <Route path="/womens-wear" element={<WomensWear/>} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/trending-products" element={<TrendingProducts/>} />
        <Route path="/best-selling" element={<BestSelling/>} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/cart" element={<Cart />} />
        
</Routes>
    

  <Footer/>

  </div>
  </Router>
  </CartProvider>
  );
};

export default App;

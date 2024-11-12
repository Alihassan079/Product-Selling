import React from "react";
import Image1 from "../../assets/hero/men.png";
import Image2 from "../../assets/hero/Women 2.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
    "Get up to 50% off on all men’s wear! Discover a wide range of stylish outfits, from casual tees to formal shirts and more. Don’t miss out on this limited-time offer",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
     "Enjoy 30% off on all women’s wear! Explore trendy styles, from chic dresses to stylish tops and more. Refresh your wardrobe with this limited-time offer. Shop now and save big!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
     "Massive Sale! Get up to 70% off on all products. From trendy fashion to essential accessories, grab your favorites at unbeatable prices. Limited-time offer—don’t miss out on these deals!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true, 
  };
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/Womens-wear'); 
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute-top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm lg:text-lg text-justify"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderClick}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

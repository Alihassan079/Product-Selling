import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Testi/amir.jpeg";
import Image2 from "../../assets/Testi/fahad.jpg";
import Image3 from "../../assets/Testi/hania.jpeg";
import Image4 from "../../assets/Testi/shoaib.jpeg";


const TestimonialData = [
  {
    id: 1,
    name: "Muhammad Amir",
    text: " Exceptional quality and style in men's products. Perfect for both casual and formal occasions",
    img: Image1,
  },
  {
    id: 2,
    name: "Fahad Mustafa",
    text: "Stylish men's products that combine comfort and trendiness perfect for every occasion",
    img: Image2,
  },
  {
    id: 3,
    name: "Hania Amir",
    text: " Stunning women’s products that blend elegance and comfort for every occasion",
    img: Image3,
  },
  {
    id: 5,
    name: "Shoaib Akhtar",
    text: "Top-notch men’s products that deliver style, comfort, and performance. Highly recommended",
    img: Image4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-20">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs lg:text-lg text-gray-400">
          Fantastic quality! I found stylish options for both men and women. Highly recommend for anyone looking to upgrade their wardrobe!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

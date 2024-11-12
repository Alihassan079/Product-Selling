import React, { useState } from "react";
import Img1 from "../../assets/women/ethnic.jpg";
import Img2 from "../../assets/women/western.jpeg";
import Img3 from "../../assets/women/goggles.jpeg";
import Img4 from "../../assets/women/T Shirt.jpeg";
import Img5 from "../../assets/women/fashion shirt.jpeg";
import Img6 from "../../assets/women/sumer.jpeg";
import Img7 from "../../assets/women/casual.jpeg";
import Img8 from "../../assets/women/glasses.jpeg";
import Img9 from "../../assets/women/jacket.jpeg";
import Img10 from "../../assets/women/skirt.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Summer Dress",
    rating: 4.2,
    color: "Blue",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Casual Pants",
    rating: 4.3,
    color: "Green",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Sunglasses",
    rating: 4.6,
    color: "Black",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Jacket",
    rating: 4.8,
    color: "Gray",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Skirt",
    rating: 4.4,
    color: "Red",
    aosDelay: "1800",
  },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false); 

  const visibleProducts = showAll ? ProductsData : ProductsData.slice(0, 5);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
          Stylish women's wear with trendy designs, comfortable fabrics, and versatile styles for every occasion.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {visibleProducts.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button 
            onClick={() => setShowAll(!showAll)}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

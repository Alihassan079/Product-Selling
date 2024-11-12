import React from 'react';
import { useCart } from '../Context/CartContext';
import floralImage from "../assets/womenWear/floral.jpeg";
import jeansImage from "../assets/womenWear/jeans.jpeg";
import bagImage from "../assets/womenWear/crossbag.jpeg";
import boots from "../assets/womenWear/boots.jpeg";

const womensWearProducts = [
  {
    id: 1,
    name: "Floral Maxi Dress",
    description: "Flowy and elegant maxi dress perfect for summer outings.",
    price: 49.99, // Convert to number instead of string for easier calculations
    image: floralImage,
    category: "Dresses",
  },
  {
    id: 2,
    name: "High-Waisted Jeans",
    description: "Comfortable and stylish high-waisted jeans for everyday wear.",
    price: 39.99,
    image: jeansImage,
    category: "Pants",
  },
  {
    id: 3,
    name: "Crossbody Bag",
    description: "Trendy crossbody bag for everyday essentials.",
    price: 39.99,
    image: bagImage,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Classic Ankle Boots",
    description: "Stylish ankle boots that complement any outfit.",
    price: 69.99,
    image: boots,
    category: "Footwear",
  },
];

const WomensWear = () => {
  const { addToCart } = useCart(); // Call useCart as a function

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold"> Women's Wear Collection</h1>
      </header>

      {/* Product Grid */}
      <main className="p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {womensWearProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 sm:h-56 "
                />
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-semibold dark:text-white">{product.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{product.description}</p>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 font-bold mt-2">${product.price.toFixed(2)}</p>
                  <button 
                    className="mt-4 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 text-sm sm:text-base"
                    onClick={() => addToCart("WomensWear", product)} // Ensure category and product are passed correctly
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WomensWear;
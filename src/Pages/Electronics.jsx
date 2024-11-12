import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import Airbuds from "../assets/electronics/airbuds.jpeg";
import SmartWatch from "../assets/electronics/smartWatch.jpeg";
import Speaker from "../assets/electronics/speaker.jpeg";
import SmartTv from "../assets/electronics/SmartTV.jpeg";

const electronicsProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "Experience high-quality sound and seamless connectivity with our wireless earbuds.",
    price: 89.99,
    image: Airbuds,
    category: "Audio",
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Stay connected and track your fitness with this stylish smartwatch.",
    price: 199.99,
    image: SmartWatch,
    category: "Wearables",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    description: "Enjoy your music on the go with our compact and powerful Bluetooth speaker.",
    price: 49.99,
    image: Speaker,
    category: "Audio",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    description: "Transform your viewing experience with stunning 4K resolution and smart features.",
    price: 799.99,
    image: SmartTv,
    category: "Television",
  },
  // Add more products as needed...
];

const Electronics = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Electronics Collection</h1>
      </header>

      {/* Product Grid */}
      <main className="p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {electronicsProducts.map((product) => (
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
                    onClick={()=> addToCart("Electronics", product)}
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

export default Electronics;
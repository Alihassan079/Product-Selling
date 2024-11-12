import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import HeadPhone from "../assets/trending/headPhones.jpg";
import SmartPhone from "../assets/trending/smartphonex.jpeg";
import WatchPro from "../assets/trending/watchPro.jpeg";
import SmartTV from "../assets/trending/HDTv.jpeg";

const trendingProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Experience clear sound and deep bass with these wireless headphones.",
    price: 89.99,
    image: HeadPhone,
    category: "Audio",
  },
  {
    id: 2,
    name: "Smartphone X",
    description: "Latest model with advanced features and sleek design for smartphone.",
    price: 999.99,
    image: SmartPhone,
    category: "Smartphones",
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Stay connected and track your fitness with this stylish smartwatch.",
    price: 199.99,
    image: WatchPro,
    category: "Wearables",
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    description: "Enjoy your favorite shows in stunning 4K resolution with 4k ultra HD TV.",
    price: 499.99,
    image: SmartTV,
    category: "Television",
  },
  // Add more products as needed...
];

const TrendingProducts = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Trending Products</h1>
      </header>

      {/* Product Grid */}
      <main className="p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 "
                />
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-semibold dark:text-white">{product.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{product.description}</p>
                  <p className="text-gray-900 dark:text-gray-100 font-bold mt-2">${product.price.toFixed(2)}</p>
                  <button 
                    className="mt-4 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
                    onClick={()=> addToCart("TrendingProducts",product)}
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

export default TrendingProducts;
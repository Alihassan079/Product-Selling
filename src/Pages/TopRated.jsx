import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import LeatherJacket from "../assets/toprated/leatherJacket.jpeg";
import AirBuds from "../assets/toprated/airbuds.jpeg";
import Shoes from "../assets/toprated/runningShoes.jpeg";
import Sunglasses from "../assets/toprated/sunglasses.jpeg";

const topratedProducts = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    description: "Luxurious leather jacket with impeccable craftsmanship.",
    price: 129.99,
    image: LeatherJacket,
    category: "Jackets",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "High-quality sound with noise cancellation features.",
    price: 89.99,
    image: AirBuds,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight and durable running shoes for all terrains.",
    price: 59.99,
    image: Shoes,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    description: "UV-protective sunglasses with a modern design.",
    price: 29.99,
    image: Sunglasses,
    category: "Accessories",
  },
];

const TopRated = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Top Rated Products</h1>
      </header>

      {/* Product Grid */}
      <main className="p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {topratedProducts.map((product) => (
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
                    onClick={()=> addToCart("TopRated",product)}
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

export default TopRated;
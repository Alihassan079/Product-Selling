import React from 'react';
import { useCart } from '../Context/CartContext';
import slimTshirt from "../assets/mensWear/fitTshirt.jpeg";
import Jacket from "../assets/mensWear/jacket.jpeg";
import Sneakers from "../assets/mensWear/sneakers.jpeg";
import FormalSuit from "../assets/mensWear/formal.jpeg";


const MensWearProducts = [
  {
    id: 1,
    name: "Slim Fit T-Shirt",
    description: "High-quality cotton t-shirt with a comfortable fit.",
    price: 24.99,
    image: slimTshirt,
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Leather Jacket",
    description: "Stylish leather jacket perfect for casual outings.",
    price: 99.99,
    image: Jacket,
    category: "Jackets",
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Trendy sneakers that go with any outfit.",
    price: 69.99,
    image: Sneakers,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Formal Suit",
    description: "Elegant formal suit for special occasions.",
    price: 199.99,
    image: FormalSuit,
    category: "Suits",
  },
  
];

const MensWear = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Men's Wear Collection</h1>
      </header>

      {/* Product Grid */}
      <main className="p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {MensWearProducts.map((product) => (
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
                    onClick={() => addToCart("MensWear", product)}
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

export default MensWear;

// Done
import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import AirFrier from "../assets/bestSelling/Airfrier.jpeg";
import HeadPhone from "../assets/bestSelling/noiseCancelHeadphone.jpeg";
import LedTV from "../assets/bestSelling/LedTv.jpeg";
import SmertPhone12 from "../assets/bestSelling/Phone12pro.jpeg";



const BestSellingProducts = [
  {
    id: 1,
    name: "Air Fryer Pro",
    description: "Cook your favorite meals quickly and healthily with this top-rated air fryer.",
    price: 129.99,
    image: AirFrier,
    category: "Kitchen Appliances",
  },
  {
    id: 2,
    name: "Noise-Cancelling Headphones",
    description: "Immerse yourself in music with noise-cancelling headphones.",
    price: 299.99,
    image: HeadPhone,
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart LED TV",
    description: "Experience stunning picture quality with our best-selling Smart LED TV.",
    price: 699.99,
    image: LedTV,
    category: "Television",
  },
  {
    id: 4,
    name: "Smartphone Pro 12",
    description: "The latest smartphone with cutting-edge technology and amazing camera features.",
    price: 999.99,
    image: SmertPhone12,
    category: "Smartphones",
  },
  // Add more products as needed...
];

const BestSelling = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Best Selling Products</h1>
      </header>

      {/* Product Grid */}
      <main className="p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {BestSellingProducts.map((product) => (
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
                    onClick={()=> addToCart("BestSelling", product)}
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

export default BestSelling;
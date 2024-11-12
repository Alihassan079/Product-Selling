import React, { useContext } from 'react';
import { useCart } from '../Context/CartContext';
import ClasicShirt from "../assets/kidsWear/clasicShirt.jpeg";
import denimjacket from "../assets/kidsWear/denimJacket.jpeg";
import ShortSet from "../assets/kidsWear/shortset.jpeg";
import BunnyPjamas from "../assets/kidsWear/bunny.jpeg";

const kidsWearProducts = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "Comfortable and stylish t-shirt, available in multiple colors.",
    price: 19.99,
    image: ClasicShirt,
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Denim Jacket",
    description: "Trendy denim jacket suitable for all seasons.",
    price: 49.99,
    image: denimjacket,
    category: "Jackets",
  },
  {
    id: 3,
    name: "Shorts Set",
    description: "Cool and comfortable shorts set perfect for summer.",
    price: 24.99,
    image: ShortSet,
    category: "Shorts",
  },
  {
    id: 4,
    name: "Bunny Pajamas",
    description: "Adorable pajamas with a bunny design, perfect for bedtime.",
    price: 34.99,
    image: BunnyPjamas,
    category: "Pajamas",
  },

  // Add more products as needed...
];

const KidsWear = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Kid's Wear Collection</h1>
      </header>

      {/* Product Grid */}
      <main className="p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {kidsWearProducts.map((product) => (
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
                    onClick={()=> addToCart("KidsWear",product)}
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

export default KidsWear;
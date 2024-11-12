import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const CartPage = () => {
     const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [selectedPayment, setSelectedPayment] = useState('');
  
    // Calculate total amount across all categories
     const totalAmount = Object.values(cartItems)
      .flat()
       .reduce((total, item) => total + item.price * item.quantity, 0);
  
  const handlePaymentChange = (e) => {
      setSelectedPayment(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-700 text-white py-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold">Your Cart</h1>
      </header>

      {/* Check if there are items in any category */}
      {Object.keys(cartItems).some((category) => cartItems[category].length > 0) ? (
        <div className="container mx-auto p-4 sm:p-6">
          {Object.entries(cartItems).map(([category, items]) => {
            // Only show the category heading if the category has items in the cart
            if (items.length > 0) {
              return (
                <div key={category} className="mb-8">
                  <h2 className="text-xl font-bold mb-4 dark:text-white">{category}</h2>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center justify-between border-b py-4 dark:border-gray-600">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                        <div className="flex-1 mx-4">
                          <h3 className="text-lg font-semibold dark:text-white">{item.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
                          <p className="text-sm">
                            Quantity:
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(category, item.id, parseInt(e.target.value))}
                              className="w-12 ml-2 border dark:border-gray-500 rounded px-1 text-center dark:bg-gray-800 dark:text-white"
                              aria-label={`Quantity for ${item.name}`}
                            />
                          </p>
                        </div>
                        <button
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                          onClick={() => removeFromCart(category, item.id)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  </div>   
              );
            }
          })}

         {/* Total Amount */}
        <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold dark:text-white">Total Amount:</h3>
           <p className="text-xl font-bold dark:text-white">${totalAmount.toFixed(2)}</p>
           </div>
        
          {/* Payment Method Selection */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2 dark:text-white">Select Payment Method:</h4>
            <div className="space-y-2">
              {['credit-card', 'paypal', 'cash-on-delivery'].map(method => (
                <label className="flex items-center" key={method}>
                  <input
                    type="radio"
                    value={method}
                    checked={selectedPayment === method}
                    onChange={handlePaymentChange}
                    className="mr-2"
                  />
                  <span className="dark:text-white">{method.charAt(0).toUpperCase() + method.slice(1).replace(/-/g, ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Checkout Button */}
          <button
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            onClick={() => alert(`Payment method selected: ${selectedPayment}\nTotal Amount: $${totalAmount.toFixed(2)}`)}
          disabled={!selectedPayment}
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6 dark:text-gray-300">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
// done
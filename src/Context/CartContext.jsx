import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (category, item) => {
    setCartItems((prevCart) => {
      const categoryItems = prevCart[category] || [];
      const existingItem = categoryItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          ...prevCart,
          [category]: categoryItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...prevCart,
          [category]: [...categoryItems, { ...item, quantity: 1 }],
        };
      }
    });
  };
  // for Updating Quantity

  const updateQuantity = (category, id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity to 0 or negative

    setCartItems((prevCart) => {
      const updatedCategoryItems = prevCart[category].map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      );
      return {
        ...prevCart,
        [category]: updatedCategoryItems,
      };
    });
  };

  // Add the removeFromCart function here
  const removeFromCart = (category, id) => {
    setCartItems((prevCart) => {
      const  updatedCategoryItems = prevCart[category] .filter(
        (item) => item.id !== id
      );
      return {
        ...prevCart,
        [category]: updatedCategoryItems,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// done
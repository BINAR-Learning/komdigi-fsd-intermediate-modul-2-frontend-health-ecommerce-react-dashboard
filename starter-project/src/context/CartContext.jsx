import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // TODO: State untuk cart items (array of products)
  const [cart, setCart] = useState([]);

  // TODO: Function addToCart(product)
  // Hint: Check if product already in cart
  //       If yes, increase quantity
  //       If no, add to cart with quantity 1

  // TODO: Function removeFromCart(productId)

  // TODO: Function updateQuantity(productId, quantity)

  // TODO: Calculate cartTotal (sum of all items)

  // TODO: Calculate cartCount (total items in cart)

  const value = {
    cart,
    addToCart: () => console.log('TODO: Implement addToCart'),
    removeFromCart: () => console.log('TODO: Implement removeFromCart'),
    updateQuantity: () => console.log('TODO: Implement updateQuantity'),
    cartTotal: 0,
    cartCount: cart.length
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}


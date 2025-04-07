import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  serviceId: string;
  serviceName: string;
  subService: string;
  price: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: {
    (index: number): void;
    (serviceId: string, subServiceName: string): void;
  };
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  function removeFromCart(index: number): void;
  function removeFromCart(serviceId: string, subServiceName: string): void;
  function removeFromCart(identifier: number | string, subServiceName?: string): void {
    if (typeof identifier === 'number') {
      // Remove by index
      setCart(cart.filter((_, i) => i !== identifier));
    } else if (subServiceName) {
      // Remove by serviceId and subServiceName
      const itemIndex = cart.findIndex(
        item => item.serviceId === identifier && item.subService === subServiceName
      );
      if (itemIndex !== -1) {
        const newCart = [...cart];
        newCart.splice(itemIndex, 1);
        setCart(newCart);
      }
    }
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import type { CartItem } from "@/types/CartType";
import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartLoading, setCartLoading] = useState(false);
  // const [idCounter, setIdCounter] = useState(1);

  const addItem = (item: CartItem) => {
    setCartLoading(true);
    setCart((prev) => [item, ...prev]);
    setTimeout(() => {
      setCartLoading(false);
    }, 500);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartLoading(true);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    setTimeout(() => {
      setCartLoading(false);
    }, 500);
  };

  const removeItem = (id: number) => {
    setCartLoading(true);
    setCart((prev) => prev.filter((item) => item.id !== id));
    setTimeout(() => {
      setCartLoading(false);
    }, 500);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateQuantity, removeItem, cartLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};

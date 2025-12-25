"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Cart } from "../lib/types/ecommerce";
import { cartService } from "../lib/api/cart-service";
import { useSession } from "next-auth/react";

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  refreshCart: () => Promise<void>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const { status } = useSession();

  const refreshCart = useCallback(async () => {
    if (status !== "authenticated") {
      setCart(null);
      return;
    }
    setLoading(true);
    try {
      const response = await cartService.getCart();
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addToCart = useCallback(async (productId: string, quantity: number) => {
    try {
      const response = await cartService.addToCart(productId, quantity, "");
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  }, []);

  const updateQuantity = useCallback(async (productId: string, quantity: number) => {
    try {
      const response = await cartService.updateCartItem(productId, quantity);
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to update cart quantity:", error);
      throw error;
    }
  }, []);

  const removeFromCart = useCallback(async (productId: string) => {
    try {
      const response = await cartService.removeFromCart(productId);
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      throw error;
    }
  }, []);

  const clearCart = useCallback(async () => {
    try {
      const response = await cartService.clearCart();
      if (response.success) {
        setCart(response.data);
      }
    } catch (error) {
      console.error("Failed to clear cart:", error);
      throw error;
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        refreshCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

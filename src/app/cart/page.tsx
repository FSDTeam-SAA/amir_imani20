"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import ProductNavbar from "@/components/shared/ProductNavbar";
import ProductFooter from "@/components/shared/ProductFooter";
import CartItem from "@/components/shared/CartItem";
import OrderSummary from "@/components/shared/OrderSummary";
import { useCart } from "@/provider/cart-provider";

export default function CartPage() {
  const { cart, loading, updateQuantity, removeFromCart } = useCart();

  const items = cart?.productIds || [];

  const handleQuantityChange = async (
    productId: string,
    newQuantity: number
  ) => {
    try {
      await updateQuantity(productId, newQuantity);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const handleRemove = async (productId: string) => {
    try {
      await removeFromCart(productId);
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const tax = 5.0;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB]">
        <ProductNavbar />
        <main className="container mx-auto px-6 pt-32 pb-20 max-w-[1240px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-[#FF7F50]" />
            <p className="text-[#8B8B8B]">Loading your cart...</p>
          </div>
        </main>
        <ProductFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      <ProductNavbar />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-[1240px]">
        {/* Back Link */}
        <Link
          href="/product/doundo"
          className="inline-flex items-center gap-2 text-[#FF7F50] text-sm font-semibold mb-8 hover:underline decoration-2 underline-offset-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="w-full lg:flex-1">
            {items.length > 0 ? (
              <div className="flex flex-col">
                {items.map((item) => (
                  <CartItem
                    key={item.productId._id}
                    id={item.productId._id}
                    title={item.productId.productName}
                    description={item.productId.description}
                    price={item.productId.price}
                    imageUrl={item.productId.img}
                    quantity={item.quantity}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#EFEFEF] rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                <div className="text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Your cart is empty
                </h3>
                <p className="text-[#8B8B8B]">
                  Looks like you haven&apos;t added anything to your cart yet.
                </p>
                <Link href="/product/doundo">
                  <span className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#111111] transition-colors">
                    Start Shopping
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[380px]">
            <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
          </div>
        </div>
      </main>

      <ProductFooter />
    </div>
  );
}

"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProductNavbar from "@/components/shared/ProductNavbar"
import ProductFooter from "@/components/shared/ProductFooter"
import CartItem from "@/components/shared/CartItem"
import OrderSummary from "@/components/shared/OrderSummary"

const INITIAL_CART_ITEMS = [
  {
    id: "1",
    title: "Emberheart Dragon",
    description: "Your pet's information and activate the tag for your pretty pet just in a second.",
    price: 20.00,
    imageUrl: "/images/placeholder-product.jpg",
    quantity: 1,
  },
  {
    id: "2",
    title: "Azure Serpent",
    description: "Your pet's information and activate the tag for your pretty pet just in a second.",
    price: 0.00,
    imageUrl: "/images/placeholder-product.jpg",
    quantity: 0,
  },
  {
    id: "3",
    title: "Wyvern of the Peak",
    description: "Your pet's information and activate the tag for your pretty pet just in a second.",
    price: 0.00,
    imageUrl: "/images/placeholder-product.jpg",
    quantity: 0,
  }
]

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_CART_ITEMS)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 5.00
  const tax = 5.00

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
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-[#EFEFEF] rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                <div className="text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-[#111111]">Your cart is empty</h3>
                <p className="text-[#8B8B8B]">Looks like you haven&apos;t added anything to your cart yet.</p>
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
            <OrderSummary 
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
            />
          </div>
        </div>
      </main>

      <ProductFooter />
    </div>
  )
}

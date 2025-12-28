"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { useCart } from "@/provider/cart-provider";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const { data: session } = useSession();

  console.log(session?.user.id);

  const handleAddToCart = async () => {
    setIsAdding(true);
    if (!session?.user?.id) {
      toast.error("Please sign in to add to cart.");
      setIsAdding(false);
      return;
    }
    try {
      await addToCart(
        [
          {
            productId: product._id,
            quantity,
          },
        ],
        session?.user?.id as string
      );
      toast.success(`${product.productName} added to cart!`);
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Product Image */}
        <div className="relative aspect-square w-full max-w-120 mx-auto lg:ml-0 bg-white rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08)]">
          {product.imgs?.length ? (
            <Image
              src={product.imgs?.[0]}
              alt={product.productName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col text-left">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block bg-[#FFF4D6] text-[#111111] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
              New!
            </span>
          </div>

          {/* Title and Price */}
          <h1 className="text-4xl lg:text-[40px] font-bold text-[#111111] mb-2 leading-tight">
            {product.productName}
          </h1>
          <div className="text-3xl font-bold text-[#111111] mb-6">
            ${product.price}
          </div>

          {/* Summary / Features */}
          <p className="text-[#333333] text-base leading-relaxed mb-6 whitespace-pre-line">
            {product.feature}
          </p>

          {/* Controls */}
          <div className="space-y-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                Quantity
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center border border-[#EFEFEF] rounded-md overflow-hidden bg-[#FBFBFB]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                    disabled={isAdding}
                  >
                    <Minus className="w-3 h-3 text-[#111111]" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-[#111111]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                    disabled={isAdding}
                  >
                    <Plus className="w-3 h-3 text-[#111111]" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full h-14 bg-[#000000] hover:bg-[#111111] text-white rounded-full text-base font-semibold shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all transform active:scale-[0.98] disabled:opacity-50"
            >
              {isAdding ? "Adding..." : "Add to Cart"}
            </Button>

            {/* Secondary Action */}
            {/* <button className="flex items-center gap-2 text-[13px] text-[#8B8B8B] hover:text-[#111111] transition-colors mx-auto lg:mx-0">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

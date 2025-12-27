"use client";

import React, { useState } from "react";
import { Check, Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { useCart } from "@/provider/cart-provider";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

interface ProductHeroProps {
  product: Product;
}

const MerchandiseSingleCard = ({ product }: ProductHeroProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [selectColor, setSelectColor] = useState<string | null>("green");
  const [selectSize, setSelectSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { addToCart } = useCart();

  const { data: session } = useSession();

  const handleAddToCart = async () => {
    setIsAdding(true);
    if (!session?.user?.id) {
      toast.error("Please sign in to add to cart.");
      return;
    }
    try {
      await addToCart(product._id, quantity, session?.user?.id as string);
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
        <div className="relative aspect-square w-full max-w-[480px] mx-auto lg:ml-0 bg-white rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08)]">
          <div className="flex gap-3 relative aspect-square">
            <div className="w-20 flex flex-col gap-3 overflow-y-auto no-scrollbar">
              {product.imgs && product.imgs.length > 0 ? (
                product.imgs.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-full h-20 shrink-0 cursor-pointer border-2 rounded-md overflow-hidden ${
                      selectedImage === img || (!selectedImage && index === 0)
                        ? "border-gray-900"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${product.productName} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="relative w-full h-20 shrink-0 border-2 border-transparent">
                  <Image
                    src={product.img || "/no-image.jpg"}
                    alt={product.productName}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
            <div className="relative flex-1 h-full rounded-xl overflow-hidden bg-gray-50">
              <Image
                src={
                  selectedImage ||
                  (product.imgs && product.imgs.length > 0
                    ? product.imgs[0]
                    : product.img) ||
                  "/no-image.jpg"
                }
                alt={product.productName}
                fill
                className="object-cover"
              />
            </div>
          </div>
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
            <div>
              {/* Color and Size Options */}
              <div className="flex flex-col gap-6 mb-7 md:mb-10 lg:mb-14">
                {product.colors && product.colors.length > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium min-w-[60px]">
                      Colors:
                    </span>
                    <div className="flex items-center gap-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          onClick={() => setSelectColor(color)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer border ${
                            selectColor === color
                              ? "border-black ring-1 ring-black"
                              : "border-gray-200"
                          }`}
                          style={{ backgroundColor: color }}
                          title={color}
                        >
                          {selectColor === color && (
                            <Check className="text-white drop-shadow-md w-4 h-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && product.sizes.length > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium min-w-[60px]">
                      Sizes:
                    </span>
                    <div className="flex items-center gap-2">
                      {product.sizes.map((size) => (
                        <div
                          key={size}
                          onClick={() => setSelectSize(size)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer text-xs font-bold transition-colors ${
                            selectSize === size
                              ? "bg-[#111111] text-white"
                              : "bg-[#EFEFEF] text-[#111111] hover:bg-gray-200"
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
      </div>
    </section>
  );
};

export default MerchandiseSingleCard;

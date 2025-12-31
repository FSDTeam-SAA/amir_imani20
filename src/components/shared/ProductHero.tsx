"use client";

import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { data: session } = useSession();

  console.log(session?.user.id);

  const handleAddToCart = async () => {
    if (product.productType === "marchandice") {
      if (!selectedSize && product.size && product.size.length > 0) {
        toast.error("Please select a size.");
        return;
      }
      if (!selectedColor && product.color && product.color.length > 0) {
        toast.error("Please select a color.");
        return;
      }
    }

    setIsAdding(true);
    if (!session?.user?.id) {
      toast.error("Please sign in to add to Pre Order.");
      setIsAdding(false);
      return;
    }
    try {
      await addToCart(
        [
          {
            productId: product._id,
            quantity,
            color: selectedColor || undefined,
            size: selectedSize || undefined,
          },
        ],
        session?.user?.id as string
      );
      toast.success(`${product.productName} added to cart for Pre Order!`);
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-24 items-start">
        {/* Left Column: Product Image */}
        <div className="relative aspect-square w-full mx-auto lg:ml-0 overflow-hidden col-span-4 gap-3">
          <div className="flex gap-3 relative aspect-square">
            {/* Thumbnails */}
            <div className="w-20 flex flex-col gap-3 overflow-y-auto no-scrollbar">
              {product.imgs && product.imgs.length > 0 ? (
                product.imgs.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-full h-20 shrink-0 cursor-pointer border-2 rounded-md overflow-hidden ${
                      selectedImage === img || (!selectedImage && index === 0)
                        ? "border-primary"
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
            {/* Main Image */}
            <div className="relative flex-1 h-full rounded-xl overflow-hidden bg-white shadow-[0px_20px_40px_rgba(0,0,0,0.08)]">
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
        <div className="flex flex-col text-left col-span-2 gap-3">
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block bg-secondary rounded-full text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 ">
              New!
            </span>
          </div>

          {/* Title and Price */}
          <h1 className="text-4xl lg:text-[40px] font-bold text-primary-foreground mb-2 leading-tight break-words">
            {product.productName}
          </h1>
          <div className="text-3xl font-bold text-primary-foreground mb-6">
            ${product.price}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-foreground/90 mb-2">
              Features:
            </h3>
            {/* Summary / Features */}
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-6 whitespace-pre-line break-words">
              {product.feature}
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                Quantity
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center border border-[#b4b4b4] rounded-md overflow-hidden bg-[#FBFBFB]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                    disabled={isAdding}
                  >
                    <Minus className="w-3 h-3 text-primary-foreground" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-primary-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                    disabled={isAdding}
                  >
                    <Plus className="w-3 h-3 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {product.productType === "marchandice" && (
              <div className="space-y-6">
                {/* Size Selection */}
                {product.size && product.size.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.size.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-sm font-medium border rounded-md transition-all ${
                            selectedSize === size
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-[#b4b4b4] text-primary-foreground hover:border-primary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.color && product.color.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                      Color
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {product.color.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          title={color}
                          className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                            selectedColor === color
                              ? "border-primary scale-110"
                              : "border-transparent hover:border-[#b4b4b4]"
                          }`}
                        >
                          <div
                            className="w-6 h-6 rounded-full border border-black/10 shadow-sm"
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CTA Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full h-14 bg-primary hover:bg-primary/80 text-white rounded-full text-base font-semibold transition-all transform active:scale-[0.98] disabled:opacity-50 "
            >
              {isAdding ? "Adding..." : "Pre Order"} <ShoppingCart />
            </Button>

            {/* Secondary Action */}
            {/* <button className="flex items-center gap-2 text-[13px] text-[#8B8B8B] hover:text-primary-foreground transition-colors mx-auto lg:mx-0">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

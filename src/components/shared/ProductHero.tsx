"use client"

import React, { useState } from "react"
import { Heart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductHero() {
  const [quantity, setQuantity] = useState(1)

  return (
    <section className="py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Product Image */}
        <div className="relative aspect-square w-full max-w-[480px] mx-auto lg:ml-0 bg-white rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08)]">
          <Image
            src="/images/placeholder-product.jpg" // Placeholder for uploaded_image_1766533417951.jpg
            alt="DoUndo Game"
            fill
            className="object-cover"
          />
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
            DoUndo
          </h1>
          <div className="text-3xl font-bold text-[#111111] mb-6">
            $1,299
          </div>

          {/* Summary */}
          <p className="text-[#333333] text-base leading-relaxed mb-6">
            A 4×4 grid with 16 spaces.
            <br />
            12 unique symbols, 6 copies each.
            <br />
            A thematic companion booklet with backstory and flavor.
          </p>

          {/* Controls */}
          <div className="space-y-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#8B8B8B]">
                Size
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center border border-[#EFEFEF] rounded-md overflow-hidden bg-[#FBFBFB]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                  >
                    <Minus className="w-3 h-3 text-[#111111]" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-[#111111]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-2 hover:bg-[#EFEFEF] transition-colors"
                  >
                    <Plus className="w-3 h-3 text-[#111111]" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full h-14 bg-[#000000] hover:bg-[#111111] text-white rounded-full text-base font-semibold shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all transform active:scale-[0.98]">
              Add to Cart
            </Button>

            {/* Secondary Action */}
            <button className="flex items-center gap-2 text-[13px] text-[#8B8B8B] hover:text-[#111111] transition-colors mx-auto lg:mx-0">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Trash2, Minus, Plus } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  quantity: number
  onQuantityChange: (id: string, newQuantity: number) => void
  onRemove: (id: string) => void
}

export default function CartItem({
  id,
  title,
  description,
  price,
  imageUrl,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 border border-[#EFEFEF] rounded-lg mb-4 bg-white hover:border-[#FF7F50]/30 transition-colors">
      {/* Remove Button */}
      <button 
        onClick={() => onRemove(id)}
        className="p-2 text-[#FF7F50] hover:bg-[#FF7F50]/10 rounded-full transition-colors shrink-0"
      >
        <Trash2 className="w-5 h-5" />
      </button>

      {/* Product Image */}
      <div className="w-20 h-20 relative rounded-md overflow-hidden shrink-0 border border-[#EFEFEF]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 max-w-[300px]">
          <h3 className="text-base font-semibold text-[#FF7F50] leading-tight">
            {title}
          </h3>
          <p className="text-xs text-[#8B8B8B] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price and Stepper */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <span className="text-lg font-bold text-[#FF7F50]">
            ${price?.toFixed(2)}
          </span>
          
          <div className="flex items-center border border-[#2E8F8A] rounded-md overflow-hidden h-8">
            <button
              onClick={() => onQuantityChange(id, Math.max(0, quantity - 1))}
              className="px-2 h-full hover:bg-[#2E8F8A]/10 text-[#2E8F8A] transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium text-[#333333]">
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(id, quantity + 1)}
              className="px-2 h-full hover:bg-[#2E8F8A]/10 text-[#2E8F8A] transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

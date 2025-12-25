import React from "react"
import { Product } from "@/lib/types/ecommerce"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Split the feature string by commas if it contains multiple features
  const featureList = product.feature ? product.feature.split(",").map(f => f.trim()).filter(f => f) : []

  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      <div className="max-w-[800px]">
        {/* Main Title */}
        <h2 className="text-2xl font-bold text-[#111111] mb-6">
          {product.productName}
        </h2>

        {/* Long Description */}
        <div className="space-y-6 mb-12 text-[#222222] text-base leading-relaxed">
          <p className="whitespace-pre-line">{product.description}</p>
        </div>

        {/* Subheading and List (Features) */}
        {featureList.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#111111]">
              Key Features
            </h3>
            <ul className="space-y-4 text-[#222222] text-base list-disc pl-5">
              {featureList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

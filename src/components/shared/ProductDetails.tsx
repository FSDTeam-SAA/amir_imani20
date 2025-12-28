import React from "react";
import { Product } from "@/lib/types/ecommerce";
import DownloadForm from "./DownloadForm";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const featureList = product.feature
    ? product.feature
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean)
    : [];

  return (
    <section className="py-12 border-t border-[#EFEFEF] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              {product.productName}
            </h2>

            <div className="space-y-6 mb-12 text-[#222222] text-base leading-relaxed">
              <p className="whitespace-pre-line">
                {product.description}
              </p>
            </div>

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

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 mx-auto">
            <DownloadForm />
          </div>

        </div>
      </div>
    </section>
  );
}

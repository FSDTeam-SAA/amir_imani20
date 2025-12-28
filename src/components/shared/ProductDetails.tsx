import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Product } from "@/lib/types/ecommerce";
import DownloadForm from "./DownloadForm";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Split the feature string by commas if it contains multiple features
  const featureList = product.feature
    ? product.feature
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean)
    : [];
  console.log("cla", product);
  return (
    <section className="py-12 border-t border-[#EFEFEF] overflow-hidden ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              {product.productName}
            </h2>

            <div className="space-y-6 mb-12 text-[#222222] text-base leading-relaxed">
              <p
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="whitespace-pre-line"
              ></p>
            </div>

            {/* {featureList.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  Key Features
                </h3>
                <ul className="space-y-4 text-[#222222] text-base list-disc pl-5">
                  {featureList.map((feature, index) => (
                    <li 
          dangerouslySetInnerHTML={{ __html: feature }}
           key={index}></li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>

          {/* RIGHT SIDEBAR */}

          {
            <div className="lg:col-span-4 mx-auto">
              <DownloadForm />
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export const ProductDetailsSkeleton = () => {
  return (
    <section className="py-12 border-t border-[#EFEFEF]">
      <div className="max-w-[800px]">
        <Skeleton className="h-8 w-1/2 mb-6" />
        <div className="space-y-4 mb-12">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-7 w-1/3" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types/ecommerce";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (
    e: React.MouseEvent,
    product: Product,
    redirect?: boolean
  ) => Promise<void>;
  addingToCartId: string | null;
}

export default function ProductCard({
  product,
  handleAddToCart,
  addingToCartId,
}: ProductCardProps) {
  const isAddingToCart = addingToCartId === product._id;

  return (
    <Link
      key={product._id}
      href={`/product/${product._id}`}
      className="group block w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[490px]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Container with Overlay */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/80 via-primary-foreground/20 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-90" />

          <Image
            src={product?.imgs?.[0] || product?.img || "/no-image.jpg"}
            width={490}
            height={670}
            alt={product.productName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-primary text-white text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              New Arrival
            </span>
          </div>

          {/* Product Info - Always visible on top of overlay */}
          <div className="absolute inset-0 flex flex-col gap-3 justify-end p-6 z-20">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 line-clamp-2">
                {product.productName}
              </h3>
              <p className="text-white/90 text-lg font-semibold mb-4">
                ${product.price}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 transition-all duration-300 ">
              <Button
                variant="secondary"
                className="flex-1 bg-white hover:bg-gray-100 text-primary-foreground font-semibold"
                onClick={(e) => handleAddToCart(e, product)}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? (
                  "..."
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </>
                )}
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/80 text-white font-semibold"
                onClick={(e) => handleAddToCart(e, product, true)}
                disabled={addingToCartId === product._id}
              >
                Pre-order
                {/* <MoveRight className="w-4 h-4 ml-2" /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

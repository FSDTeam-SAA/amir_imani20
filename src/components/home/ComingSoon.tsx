"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";

import { MoveRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/provider/cart-provider";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getProducts();
        if (response.success) {
          setProducts(response.data);
        } else {
          setError("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (
    e: React.MouseEvent,
    product: Product,
    redirect: boolean = false
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.user?.id) {
      toast.error("Please sign in to add to cart.");
      return;
    }

    setAddingToCartId(product._id);
    try {
      await addToCart(
        [
          {
            productId: product._id,
            quantity: 1,
          },
        ],
        session.user.id
      );
      toast.success(`${product.productName} added to cart!`);
      if (redirect) {
        router.push("/cart");
      }
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setAddingToCartId(null);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Products
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-[#4296A2] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Products
          </h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Products
          </h2>
          <p className="text-center text-gray-500">
            No products available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-12">
        <div className="text-center max-w-[1146px] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0C0D0E] font-bold mb-6 tracking-tight">
            Symbolverse: Stories Told Through Games
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            DoUndo is a collection of original tabletop experiences, each with
            its own style and challenge. Some invite strategic duels of
            psychology and deduction, others spark memory, puzzles, or playful
            moments of chance. What unites them is a symbolic system that ties
            every design into one universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Product Card */}
          {products.slice(0, 1).map((product) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Image Container with Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/80 via-primary-foreground/20 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-90" />

                  <Image
                    src={product?.imgs?.[0] || "/no-image.jpg"}
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
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 line-clamp-2">
                      {product.productName}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <Button
                        variant="secondary"
                        className="flex-1 bg-white hover:bg-gray-100 text-gray-900 font-semibold"
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={addingToCartId === product._id}
                      >
                        {addingToCartId === product._id ? (
                          "..."
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4 mr-2" /> Add
                          </>
                        )}
                      </Button>
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/80 text-white font-semibold"
                        onClick={(e) => handleAddToCart(e, product, true)}
                        disabled={addingToCartId === product._id}
                      >
                        Buy Now
                        <MoveRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Teaser Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/50 p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-secondary/80">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2">
              Next Release
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2">
              Walnize
            </h2>
            <p className="text-[#BDBDBD] text-xl md:text-2xl font-medium mb-8">
              Coming Very Soon
            </p>

            <Button className="rounded-full bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors px-8 py-2 h-auto font-bold flex items-center gap-2 group">
              Get Verified
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* <div className="mt-16 flex justify-center">
          <Link href="/game">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#0C0D0E] text-[#0C0D0E] hover:bg-[#0C0D0E] hover:text-white transition-all duration-300 font-bold px-10 py-6 h-auto flex items-center gap-2 group"
            >
              Explore More Games
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ComingSoon;

"use client";
import React, { useEffect, useState } from "react";

import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";

import { MoveRight } from "lucide-react";
import ProductCard from "../shared/product-card";
import { Button } from "../ui/button";
import { useCart } from "@/provider/cart-provider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

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
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
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
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
            Our Products
          </h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
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
      <div className="container mx-auto py-8 md:py-20">
        <div className="text-center max-w-[1146px] mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[48px] text-primary-foreground font-bold mb-6 tracking-tight">
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

        <div className="flex flex-wrap justify-center gap-8">
          {/* Main Product Card */}
          {products
            .filter((product) => product.productType === "card")
            .slice(0, 1)
            .map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
                addingToCartId={addingToCartId}
              />
            ))}

          {/* Coming Soon Teaser Card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/50 p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-secondary/80 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[490px] min-h-[400px]">
            <Image
              src="/images/WalnizeProductCard.jpg"
              alt="walnize"
              width={400}
              height={400}
              className="w-full h-full object-cover absolute z-0 top-0 left-0"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-[5]" />

            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-[1]" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-[1]" />

            <div className="relative z-10 flex flex-col items-center">
              {/* <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-sm mb-2">
                Next Release
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                Walnize
              </h2>
              <p className="text-white/70 text-xl md:text-2xl font-medium mb-8">
                Coming Very Soon
              </p> */}

              <Link href="/game/coming-soon">
                <Button className="rounded-full bg-primary border-2 border-primary text-white hover:bg-primary hover:text-white transition-colors px-8 py-2 h-auto font-bold flex items-center gap-2 group">
                  Get Verified
                  <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
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

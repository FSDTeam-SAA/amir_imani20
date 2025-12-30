"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";

// import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";

import { MoveRight } from "lucide-react";
import WhyChooseUs from "../about/WhyChooseUs";
import Link from "next/link";
const AboutGame = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Products
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
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

  const product = products.filter(
    (product) => product.productType === "card"
  )[0];

  return (
    <section className=" relative py-16">
      {/* <div className="absolute inset-0 opacity-10 -z-10">
              <Image
                src="/shape.png"
                alt="shape"
                fill
                className="object-cover  w-full h-full"
              />
            </div> */}
      <div className="container mx-auto overflow-hidden">
        <section className="bg-secondary py-12 px-6 md:px-12 lg:px-[117px] space-y-9 rounded-xl border border-[#EFEFEF]">
          {/* Header */}
          <header className="text-center space-y-2">
            <h2 className="text-primary-foreground text-2xl md:text-4xl lg:text-[48px] font-bold">
              About Game
            </h2>
            <p className="text-[#535862] text-sm md:text-base">
              Learn more about the company and the team behind it.
            </p>
          </header>

          {/* Content Grid */}
          <div className="flex flex-col-8 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <figure className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[700px] aspect-square">
                <Image
                  src={product.imgs?.[0] || "/no-image.jpg"}
                  alt={`${product.productName || "Game"} preview image`}
                  width={700}
                  height={420}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            </figure>

            {/* Content Section */}
            <article className="space-y-4">
              {product.feature && (
                <p className="text-primary text-base md:text-xl font-semibold leading-[150%]">
                  {product.feature}
                </p>
              )}

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {product.productName || "Untitled Game"}
              </h3>

              {product.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.description?.slice(0, 500),
                  }}
                  className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-3 lg:line-clamp-4"
                />
              )}

              <div className="pt-6 lg:pt-10">
                <Link href={`/product/${product._id}`} className="inline-block">
                  <Button className="px-6 py-2.5 group">
                    Explore More
                    <MoveRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <WhyChooseUs />
      </div>
    </section>
  );
};

export default AboutGame;

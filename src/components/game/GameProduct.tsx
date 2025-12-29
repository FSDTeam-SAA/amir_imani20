"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";
import { ArrowRight, MoveRight } from "lucide-react";

const GameProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getCards();
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

  console.log(products);
  return (
    <section className="py-12">
      <div>
        <div className="container mx-auto py-12">
          <h2 className="text-lg md:text-2xl xl:text-[48px] text-[#0C0D0E] leading-[150%] font-semibold mb-8 text-center">
            Play, Explore & Discover Your Next Adventure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            {selectedProduct
              ? products.map((product) => (
                  <Link key={product._id} href={`/product/${product._id}`}>
                    <div className="relative outline-red-500  border-2 rounded-lg    flex flex-col  justify-center">
                      <div className="relative">
                        <p className="absolute top-6 left-8 bg-[#4296A2] text-white px-3 py-1 rounded">
                          New
                        </p>
                        <p className="absolute  bg-white/15  px-3 py-1  inset-0 rounded"></p>
                        <Image
                          src={product?.img || "/no-image.jpg"}
                          width={490}
                          height={670}
                          alt={product.productName}
                          className="rounded-lg w-full aspect-4/5"
                        />

                        <h2 className="absolute top-20 w-full text-center text-xl md:text-[48px] font-semibold text-[#F04D2A]">
                          {product.productName}
                        </h2>

                        <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))
              : products.slice(0, 3).map((product) => (
                  <Link key={product._id} href={`/product/${product._id}`}>
                    <div className="relative  border-2 rounded-lg    flex flex-col  justify-center">
                      <div className="relative">
                        <p className="absolute top-6 left-8 bg-[#4296A2] text-white px-3 py-1 rounded">
                          New
                        </p>
                        <p className="absolute  bg-white/15  px-3 py-1  inset-0 rounded"></p>
                        <Image
                          src={product?.imgs?.[0] || "/no-image.jpg"}
                          width={490}
                          height={670}
                          alt={product.productName}
                          className="rounded-lg w-full aspect-4/5 object-cover"
                        />

                        <h2 className="absolute top-20 w-full text-center text-xl md:text-[48px] font-semibold text-white">
                          {product.productName}
                        </h2>

                        <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
                          Buy Now <ArrowRight />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}

            {/* {products.slice(0, 3).map((product) => (
              <Link key={product._id} href={`/product/${product._id}`}>
                <div className="relative outline-red-500  border-2 rounded-lg    flex flex-col  justify-center">
                  <div className="relative">
                    <p className="absolute top-6 left-8 bg-[#4296A2] text-white px-3 py-1 rounded">
                      New
                    </p>
                    <p className="absolute  bg-white/15  px-3 py-1  inset-0 rounded"></p>
                    <Image
                      src={product?.img || "/no-image.jpg"}
                      width={490}
                      height={670}
                      alt={product.productName}
                      className="rounded-lg w-full aspect-4/5"
                    />

                    <h2 className="absolute top-20 w-full text-center text-xl md:text-[48px] font-semibold text-[#F04D2A]">
                      {product.productName}
                    </h2>

                    <Button className="absolute bottom-6 left-1/2 -translate-x-1/2">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Link>
            ))} */}
          </div>
          {products.length > 2 && (
            <Button
              onClick={() => setSelectedProduct(!selectedProduct)}
              className="mt-10 mx-auto flex items-center gap-2 border-gray-300 text-white"
            >
              {selectedProduct ? "Less Games" : "More Games"}
              <MoveRight />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameProduct;

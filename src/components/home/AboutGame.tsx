"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/ecommerce";
import { productService } from "@/lib/api/product-service";

import { MoveRight } from "lucide-react";
import WhyChooseUs from "../about/WhyChooseUs";
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
  console.log("image", products[1]);
  const product = products[0];
  console.log("data", product);
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
      <div className="container mx-auto px-6  bg-[#FFF7E9] rounded-xl">
        <div className="py-5 text-center">
          <h2 className="text-[#000000] text-xl md:text-[48px]">About Game</h2>
          <p className="text-[#535862] text-base">
            Learn more about the company and the team behind it.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-5/3 ">
              <Image
                src={product.img || "/no-image.jpg"}
                alt="Wainzite Game"
                width={700}
                height={600}
                className="w-full aspect-5/3 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#4597A0] text-base md:text-xl mb-4 font-semibold leading-[150%]">
              {product.feature || ""}
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {product.productName || ""}
            </h2>

            {/* <p className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"></p> */}
            <p className="text-gray-700 leading-relaxed mb-10 lg:mb-14">
              {product.description ||
                " Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."}
            </p>

            <div className="flex gap-4">
              <Button className="  px-6 cursor-pointer">
                Explore More <MoveRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default AboutGame;

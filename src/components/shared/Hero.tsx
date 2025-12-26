"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen ">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(89,163,173,0.00)_42.79%,#3A7270_59.13%)] mix-blend-multiply" />

      {/* Center content */}
      <div className="relative z-10 flex items-end pb-20 justify-end min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-[120%]">
            <span className="text-balance">Different Games</span>
            <br />
            <span className="text-balance">One Language</span>
          </h1>

          <p className="text-[#FFFFFF] pb-5 md;pb-7 lg:pb-9 leading-[150%] ">
            DoUndo connects strategy, perception, imagination, and story through
            thirteen symbols that tie every experience together.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className=" cursor-pointer   px-8 py-6 rounded-full text-base  font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Game Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-5" />
    </section>
  );
}

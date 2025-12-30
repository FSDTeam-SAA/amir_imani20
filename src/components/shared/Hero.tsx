"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-evenly sm:justify-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/hero-section.jpg')] bg-cover bg-right sm:bg-center transition-transform duration-700 hover:scale-105 origin-right"
        role="img"
        aria-label="Hero background"
      />
      <div></div>

      {/* Gradient overlay */}
      <div className="md:hidden block absolute inset-0 bg-[linear-gradient(180deg,rgba(89,163,173,0.100)_10%,#3A7270_100%)] backdrop-blur-[3px] mix-blend-multiply" />

      {/* Center content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 lg:pb-34">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white md:text-primary-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight">
            <span className="block text-balance">Different Games</span>
            <span className="block text-balance">One Language</span>
          </h1>

          <p className="text-white md:text-primary-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            DoUndo connects strategy, perception, imagination, and story through
            thirteen symbols that tie every experience together.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/game">
              <Button className="group relative cursor-pointer px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/80">
                Get Your Game Now
                <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
}

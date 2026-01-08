"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  hoverScale,
  tapScale,
} from "@/config/animations";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center sm:justify-end">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero-section.jpg')] bg-cover bg-center md:bg-center origin-center"
        style={{ backgroundPosition: "center 40%" }}
        role="img"
        aria-label="Hero background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/60 md:bg-linear-to-b md:from-transparent md:via-transparent md:to-black/20 md:hidden" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/60 md:bg-linear-to-b md:from-transparent md:via-transparent md:to-black/20 md:hidden" />

      {/* Center content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 lg:pb-34">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white md:text-primary-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight"
            variants={fadeInUp}
          >
            <span className="block text-balance">Different Games</span>
            <span className="block text-balance">One Language</span>
          </motion.h1>

          <motion.p
            className="text-white md:text-primary-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light"
            variants={fadeInUp}
          >
            DoUndo connects strategy, perception, imagination, and story through
            thirteen symbols that tie every experience together.
          </motion.p>

          {/* CTA Button */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <Link href="/game">
              <Button
                asChild
                className="group relative cursor-pointer px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/80"
              >
                <motion.button whileHover={hoverScale} whileTap={tapScale}>
                  Get Your Game Now
                  <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/10 to-transparent" />
    </section>
  );
}
